import Image from "next/image";
import { Image as Img } from "./Prestashop/models";

export default function ProductImage({ productId, linkRewrite }) {
  const imgUrl = Img.products(productId, linkRewrite);
  return <Image src={imgUrl} width={200} height={200} />;
}
