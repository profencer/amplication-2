import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
};
