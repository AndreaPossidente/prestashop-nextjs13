import Image from "next/image";
import { Suspense } from "react";
import { Product, Image as Img } from "../../Prestashop/models";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    link_rewrite: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product: Product | undefined = await Product.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => undefined);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
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
              dangerouslySetInnerHTML={{ __html: product.description_short }}
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
