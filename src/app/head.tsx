import { CMS } from "./Prestashop/models";

export default async function Head() {
  const shop: CMS = await CMS.findOne({ link_rewrite: "index" }).catch(
    (err) => {
      return { meta_title: "404 Page not found", meta_description: "" };
    }
  );
  return (
    <>
      <title>{shop.head_seo_title || shop.meta_title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={shop.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
