import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  products?: ProductUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
