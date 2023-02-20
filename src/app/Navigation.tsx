import { Category } from "@/Prestashop/models";
import MenuLink from "./MenuLink";

export default async function Navigation(): Promise<JSX.Element> {
  const categories = await Category.find().catch((err) => []);

  return (
    <nav className="header-nav">
      <div className="container">
        <ul>
          {categories
            .filter((c: Category) => c.id_parent === 2)
            .map((category: Category) => {
              return (
                // @ts-expect-error Server Component
                <MenuLink
                  key={category.id}
                  keyPass={category.id}
                  href={`/c/${category.link_rewrite}`}
                  value={category.name}
                >
                  {categories.filter(
                    (sc: Category) => sc.id_parent === category.id
                  ).length > 0 && (
                    <ul key={category.id}>
                      {categories
                        .filter((sc: Category) => sc.id_parent === category.id)
                        .map((subCategory: Category) => {
                          return (
                            // @ts-expect-error Server Component
                            <MenuLink
                              key={subCategory.id}
                              keyPass={subCategory.id}
                              href={`/c/${subCategory.link_rewrite}`}
                              value={subCategory.name}
                            ></MenuLink>
                          );
                        })}
                    </ul>
                  )}
                </MenuLink>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}
