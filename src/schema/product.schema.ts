import { object, string, number, TypeOf } from "zod";

export const createProductSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }).max(100, "name is too long"),
    price: number({
      required_error: "price is required",
    }),
  }),
});

export const updateProductSchema = object({
  body: object({
    name: string({
      required_error: "name is required",
    }).max(100, "name is too long"),
    price: number({
      required_error: "price is required",
    }),
    id: string({
      required_error: "id is required",
    }),
  }),
});

export const getProductSchema = object({
  params: object({
    id: string({
      required_error: "idd is required",
    }),
  }),
});

export const deleteProductSchema = object({
  params: object({
    id: string({
      required_error: "id is required",
    }),
  }),
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;
