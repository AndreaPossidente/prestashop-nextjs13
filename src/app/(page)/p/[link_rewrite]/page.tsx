import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CMS } from "../../../Prestashop/models";

interface PageProps {
  params: {
    link_rewrite: string;
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
        <Suspense fallback={<div>Loading...</div>}>
          <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
        </Suspense>
      </div>
    </main>
  );
}
