import { CMS } from "./Prestashop/models";

export default async function Head() {
  const shop: CMS = await CMS.findOne({ link_rewrite: "index" });
  return (
    <>
      <title>{shop.head_seo_title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={shop.meta_description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
