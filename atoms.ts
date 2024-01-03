import { atom } from "recoil";

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  quantitySpacing: { plus: number[]; minus: number[] };
}

export const checkedProducts = atom<ProductInterface[]>({
  key: "checkedProducts",
  default: [],
});
