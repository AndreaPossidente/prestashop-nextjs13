import { notFound } from "next/navigation";
import { Category, Product } from "@/Prestashop/models";

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
      <div className="container">
        <div>
          <h1>{category.name}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: category.description || "" }}
          ></div>
          <h3>Products in this category:</h3>
          <ul>
            {products?.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
