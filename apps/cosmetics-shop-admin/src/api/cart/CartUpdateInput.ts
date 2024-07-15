import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CartUpdateInput = {
  products?: Array<"Option1">;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
