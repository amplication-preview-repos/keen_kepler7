import { Customer } from "../customer/Customer";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  products?: Array<"Option1">;
  totalPrice: number | null;
  customer?: Customer | null;
};
