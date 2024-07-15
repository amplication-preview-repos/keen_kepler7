import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
};
