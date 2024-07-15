import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
