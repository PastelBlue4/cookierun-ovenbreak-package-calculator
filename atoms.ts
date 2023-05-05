import { atom } from "recoil";

interface ProductInterface {
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
