import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  carts?: CartListRelationFilter;
};
