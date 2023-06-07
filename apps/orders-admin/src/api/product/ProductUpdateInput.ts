import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
};
