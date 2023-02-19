import { Product } from "@/Prestashop/models";

interface ProductHeadProps {
  params: {
    link_rewrite: string;
  };
}

export default async function Head({ params }: ProductHeadProps) {
  const product: Product = await Product.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => {
    return { meta_title: "404 Page not found", meta_description: "" };
  });

  return (
    <>
      <title>{product.meta_title || product.name || ""}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={product.meta_description || ""} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
