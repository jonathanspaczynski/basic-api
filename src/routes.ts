import { Express } from "express";
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductHandler,
  getProductHandler,
  updateProductHandler,
} from "./controller/product.controller";
import { validate } from "./middleware/validateResource";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "./schema/product.schema";

function routes(app: Express) {
  app.post(
    "/api/products",
    validate(createProductSchema),
    createProductHandler
  );

  app.put("/api/products", validate(updateProductSchema), updateProductHandler);

  app.get("/api/products/:id", validate(getProductSchema), getProductHandler);

  app.delete(
    "/api/products/:id",
    validate(deleteProductSchema),
    deleteProductHandler
  );

  app.get("/api/products", getAllProductHandler);
}

export default routes;
