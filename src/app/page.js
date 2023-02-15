import Image from "next/image";
import {
  IoBagAddOutline,
  IoGitCompareOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { Product, Image as Img } from "./Prestashop/models";

export default async function Home() {
  const products = await Product.find({}, { limit: 5 });
  for (let p of products) {
    await p.defaultCategory();
  }

  const products1 = await Product.find({}, { limit: 5, offset: 5 });
  for (let p of products1) {
    await p.defaultCategory();
  }

  return (
    <main>
      <div className="container">
        <section className="hero"></section>

        <section className="section">
          <h1>Top Products</h1>
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
                <div className="product-category">{product.category.name}</div>
                <div className="product-prices">
                  <div className="product-price">
                    € {product.price_normal.toFixed(2)}
                  </div>
                  <div className="product-price-reduced">
                    € {product.price_reduced.toFixed(2)}
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

        <section className="section">
          <h1>Best Products</h1>
          <div className="products">
            {products1.map((product1) => (
              <div key={product1.id} className="product">
                <div className="product-image">
                  <Image
                    alt={product1.name}
                    src={Img.products(
                      product1.id,
                      product1.link_rewrite,
                      "home_default"
                    )}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="product-manufacturer">
                  {product1.manufacturer_name}
                </div>
                <div className="product-name">{product1.name}</div>
                <div className="product-category">{product1.category.name}</div>
                <div className="product-prices">
                  <div className="product-price">
                    € {product1.price_normal.toFixed(2)}
                  </div>
                  <div className="product-price-reduced">
                    € {product1.price_reduced.toFixed(2)}
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
      </div>
    </main>
  );
}
