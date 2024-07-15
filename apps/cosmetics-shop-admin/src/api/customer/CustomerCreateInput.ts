import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { CartCreateNestedManyWithoutCustomersInput } from "./CartCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  email?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  carts?: CartCreateNestedManyWithoutCustomersInput;
};
