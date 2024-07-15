import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CartCreateInput = {
  products?: Array<"Option1">;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
