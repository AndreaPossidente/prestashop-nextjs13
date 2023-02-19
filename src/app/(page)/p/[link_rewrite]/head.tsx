import { CMS } from "../../../Prestashop/models";

interface HeadProps {
  params: {
    link_rewrite: string;
  };
}

export default async function Head({ params }: HeadProps) {
  const page: CMS = await CMS.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => {
    return { meta_title: "404 Page not found", meta_description: "" };
  });
  return (
    <>
      <title>{page.head_seo_title || page.meta_title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={page.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
