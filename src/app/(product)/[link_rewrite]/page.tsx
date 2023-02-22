import "./product.scss";

import Image from "next/image";
import { Product, Image as Img } from "@/Prestashop/models";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProductPageProps {
  params: {
    link_rewrite: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product: Product | undefined = await Product.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => undefined);

  await product?.defaultCategory();

  if (!product) {
    notFound();
  }

  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> /{" "}
                <Link href={`/c/${product.category?.link_rewrite}`}>
                  {product.category?.name}
                </Link>{" "}
                / {product.name}
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div>
            <Image
              alt={product.name}
              src={Img.products(
                product.id,
                product.link_rewrite,
                "home_default"
              )}
              width="300"
              height="300"
            />
            <h1>{product.name}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description_short || "",
              }}
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: product.description || "" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
