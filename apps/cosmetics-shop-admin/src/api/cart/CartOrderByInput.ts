import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  products?: SortOrder;
  totalPrice?: SortOrder;
  customerId?: SortOrder;
};
