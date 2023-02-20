import { CMS } from "@/Prestashop/models";
import { notFound } from "next/navigation";

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
        <div dangerouslySetInnerHTML={{ __html: page.content || "" }}></div>
      </div>
    </main>
  );
}
