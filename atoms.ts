import { atom } from "recoil";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const checkedProducts = atom<ProductInterface[]>({
  key: "checkedProducts",
  default: [],
});

interface CalculationDataInterface {
  products: {
    product: ProductInterface;
    quantity: number;
  };
}

export const calculationData = atom<CalculationDataInterface[]>({
  key: "calculationData",
  default: [],
});
