import { Category } from "@/app/Prestashop/models";
import Link from "next/link";

export default async function Navigation() {
  const categories = await Category.find();

  function getAllCategories(startParent, cats) {
    return cats.map((cat) => {
      if (cat.id_parent == String(startParent)) {
        let subcats = cat?.associations?.categories;
        let subcatsJSX = [];
        if (subcats) {
          subcatsJSX.push(getAllCategories(cat.id, cats));
        }
        return (
          <li key={cat.id}>
            <Link href={`/c/${cat.link_rewrite}`}>{cat.name}</Link>
            {subcats && <ul>{subcatsJSX}</ul>}
          </li>
        );
      }
    });
  }
  return (
    <nav className="header-nav">
      <div className="container">
        <ul>{getAllCategories(2, categories)}</ul>
      </div>
    </nav>
  );
}
