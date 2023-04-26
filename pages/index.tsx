import { checkedProducts } from "@/atoms";
import Product from "@/components/Product";
import Image from "next/image";
import { useRecoilState } from "recoil";

import data from "@/data.json";
import CalculateListProduct from "@/components/CalculateListProduct";

export default function Home() {
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mt-10 bg-red-300 ">
          {data.productData.map((product) => (
            <div key={product.name}>
              <Product
                id={product.id}
                price={product.price}
                image={product.image}
                name={product.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        {checkedProduct.map((product) => {
          return (
            <CalculateListProduct
              key={product.id}
              id={product.id}
              price={product.price}
              image={product.image}
              name={product.name}
            />
          );
        })}
      </div>
    </>
  );
}
