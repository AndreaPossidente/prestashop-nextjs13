import { Category } from "../../../Prestashop/models";

interface HeadProps {
  params: {
    link_rewrite: string;
  };
}

export default async function Head({ params }: HeadProps) {
  /** @ts-ignore */
  const category: Category = Category.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => {
    return { meta_title: "404 Page not found", meta_description: "" };
  });

  return (
    <>
      <title>{category.meta_title || category.name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={category.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
