import "./page.scss";
import { CMS, Configuration } from "@/Prestashop/models";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    link_rewrite: string;
  };
}

// META DATA
import type { Metadata } from "next";
/** @type {import("next").Metadata} */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const shop: Configuration = await Configuration.findOne({
    name: "PS_SHOP_NAME",
  });
  const page: CMS = await CMS.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => {
    return { meta_title: "404 Page not found", meta_description: "" };
  });
  return {
    title: page.head_seo_title || page.meta_title + " | " + shop.value,
    description: page.meta_description,
    keywords: page.meta_keywords,
  };
}

export default async function Page({ params }: PageProps) {
  const page: CMS = await CMS.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => null);

  if (!page) {
    notFound();
  }
  return (
    <main>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: page.content || "" }}></div>
      </div>
    </main>
  );
}
