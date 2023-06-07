import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  products?: ProductCreateNestedManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
