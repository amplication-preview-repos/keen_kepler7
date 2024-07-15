import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  products?: Array<"Option1">;
  orderDate: Date | null;
  customer?: Customer | null;
};
