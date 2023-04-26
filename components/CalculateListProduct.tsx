import React from "react";
import data from "@/data.json";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function CalculateListProduct({ id }: ProductInterface) {
  return <div>{id}</div>;
}
