import { Request, Response } from "express";
import {
  CreateProductInput,
  UpdateProductInput,
  ReadProductInput,
  DeleteProductInput,
} from "../schema/product.schema";
import {
  createProduct,
  findProduct,
  findAndUpdateProduct,
  deleteProduct,
  findAllProducts,
} from "../service/product.service";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  try {
    const product = await createProduct(req.body);
    return res.status(200).send(product);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
}

export async function updateProductHandler(
  req: Request<UpdateProductInput["body"]>,
  res: Response
) {
  const id = req.body.id;
  const update = req.body;
  update.updateDate = new Date();

  const product = await findProduct({ id });
  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = await findAndUpdateProduct({ id }, update, {
    new: true,
  });

  return res.status(200).send(updatedProduct);
}

export async function getProductHandler(
  req: Request<ReadProductInput["params"]>,
  res: Response
) {
  const id = req.params.id;
  const product = await findProduct({ id });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.status(200).send(product);
}

export async function deleteProductHandler(
  req: Request<DeleteProductInput["params"]>,
  res: Response
) {
  const id = req.params.id;

  const product = await findProduct({ id });

  if (!product) {
    return res.sendStatus(404);
  }

  await deleteProduct({ id });

  return res.sendStatus(200);
}

export async function getAllProductHandler(req: any, res: any) {
  const products = await findAllProducts();
  if (!products) {
    return res.sendStatus(404);
  }
  return res.status(200).send(products);
}
