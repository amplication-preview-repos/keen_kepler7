import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  totalAmount?: number | null;
  products?: Array<"Option1">;
  orderDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
};
