import { Order } from "../order/Order";
import { Cart } from "../cart/Cart";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: Array<Order>;
  firstName: string | null;
  email: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  carts?: Array<Cart>;
};
