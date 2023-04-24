import { atom } from "recoil";

export const checkedProducts = atom({
  key: "checkedProducts",
  default: ["크리스탈"],
});
