import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  order?: Order | null;
  price: number | null;
  updatedAt: Date;
};
