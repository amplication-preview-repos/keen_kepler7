import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  totalPrice?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
};
