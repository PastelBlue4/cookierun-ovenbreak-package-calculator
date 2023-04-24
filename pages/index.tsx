import { checkedProducts } from "@/atoms";
import Product from "@/components/Product";
import Image from "next/image";
import { useRecoilState } from "recoil";

export default function Home() {
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);

  const productData = [
    {
      name: "크리스탈",
      price: 1.1,
      image: "/crystar.png",
    },
    {
      name: "무지개큐브",
      price: 2.2,
      image: "/rainbow_cube.png",
    },
    {
      name: "쿠키 물약",
      price: 49.5,
      image: "/cookie_potion.png",
    },
    {
      name: "펫 물약",
      price: 33,
      image: "/pet_potion.png",
    },
    {
      name: "레전더리 쿠키 물약",
      price: 3960,
      image: "/legend_cookie_potion.png",
    },
    {
      name: "레전더리 펫 물약",
      price: 2640,
      image: "/legend_pet_potion.png",
    },
    {
      name: "스페셜 보믈 보증서",
      price: 2090,
      image: "/special_tr_ticket.png",
    },
    {
      name: "확정 에픽 보물",
      price: 5500,
      image: "/epic_tr.png",
    },
    {
      name: "확정 레전더리 보물",
      price: 8000,
      image: "/legend_tr.png",
    },
    {
      name: "쿠키스킨 묶음 뽑기 티켓",
      price: 3960,
      image: "/costume_bundle.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mt-10 bg-red-300 ">
          {productData.map((product) => (
            <div key={product.name}>
              <Product
                price={product.price}
                image={product.image}
                name={product.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">{checkedProduct}</div>
    </>
  );
}
