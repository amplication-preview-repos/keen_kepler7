import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { CartUpdateManyWithoutCustomersInput } from "./CartUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  orders?: OrderUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  email?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  carts?: CartUpdateManyWithoutCustomersInput;
};
