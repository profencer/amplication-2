import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  products?: ProductUpdateManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
