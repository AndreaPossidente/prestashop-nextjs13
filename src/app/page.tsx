import Image from "next/image";
import {
  IoBagAddOutline,
  IoGitCompareOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { Product, Image as Img, CMS } from "./Prestashop/models";

interface HomeInterface {
  homepage?: [
    {
      type?: string;
      title?: string;
      limit?: number;
      offset?: number;
    }
  ];
}

export default async function Home() {
  const products: Product[] = await Product.find({}, { limit: 5 });
  for (let p of products) {
    await p.defaultCategory();
  }

  const shop: CMS = await CMS.findOne({ link_rewrite: "index" });

  console.log(shop.content.replace("<p>", "").replace("</p>", ""));

  const homepage: HomeInterface = JSON.parse(
    shop.content.replace("<p>", "").replace("</p>", "")
  );

  const product1JSX = new Array();

  if (homepage.homepage)
    for (let section of homepage.homepage) {
      const products: Product[] = await Product.find(
        {},
        { limit: section.limit || 5, offset: section.offset || 0 }
      );
      for (let p of products) {
        await p.defaultCategory();
      }

      product1JSX.push(
        <section className="section">
          <h1>{section.title}</h1>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product">
                <div className="product-image">
                  <Image
                    alt={product.name}
                    src={Img.products(
                      product.id,
                      product.link_rewrite,
                      "home_default"
                    )}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="product-manufacturer">
                  {product.manufacturer_name}
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-category">{product.category?.name}</div>
                <div className="product-prices">
                  <div className="product-price">
                    € {product.prices.price_normal.toFixed(2)}
                  </div>
                  <div className="product-price-reduced">
                    € {product.prices.price_reduced.toFixed(2)}
                  </div>
                </div>
                <div className="product-buttons">
                  <a>
                    <IoBagAddOutline
                      size="1.5rem"
                      style={{ margin: "0.25rem auto" }}
                    />
                    <span>Add to Cart</span>
                  </a>
                  <a>
                    <IoHeartOutline
                      size="1.5rem"
                      style={{ margin: "0.25rem auto" }}
                    />
                  </a>
                  <a>
                    <IoGitCompareOutline
                      size="1.5rem"
                      style={{ margin: "0.25rem auto" }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

  return (
    <main>
      <div className="container">
        <section className="hero"></section>
        {product1JSX}
      </div>
    </main>
  );
}
