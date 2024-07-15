import { Product } from "../product/Product";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products?: Array<Product>;
  name: string | null;
};
