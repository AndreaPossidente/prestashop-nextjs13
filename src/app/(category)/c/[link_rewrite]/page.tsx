import { notFound } from "next/navigation";
import { Category, Product } from "@/Prestashop/models";
import Link from "next/link";

interface PageProps {
  params: {
    link_rewrite: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const category: Category = await Category.findOne({
    link_rewrite: params.link_rewrite,
  }).catch((err) => undefined);

  if (!category) {
    notFound();
  }

  const products: Product[] = await Product.find({
    id_category_default: category.id,
  }).catch((err) => []);

  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> / {category?.name}
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div>
            <h1>{category.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: category.description || "" }}
            ></div>
            <h3>Products in this category:</h3>
            <ul>
              {products?.map((product) => (
                <li key={product.id}>
                  <Link href={product.link_rewrite}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
