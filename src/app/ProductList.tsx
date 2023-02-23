import Image from "next/image";
import Link from "next/link";
import {
  IoBagAddOutline,
  IoGitCompareOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { Image as Img, Product } from "@/Prestashop/models";

export default async function ProductList({
  section,
}: {
  section: {
    type?: string | null;
    title?: string | null;
    limit?: number | null;
    offset?: number | null;
  };
}) {
  const product1JSX = new Array();

  const products: Product[] = await Product.find(
    {},
    { limit: section.limit || 5, offset: section.offset || 0 }
  );
  for (let p of products) {
    await p.defaultCategory();
  }

  product1JSX.push(
    <>
      <div className="products">
        {products.map((product) => (
          <Link key={product.id} href={`/${product.link_rewrite}`}>
            <div className="product">
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
                <span>
                  <IoBagAddOutline
                    size="1.5rem"
                    style={{ margin: "0.25rem auto" }}
                  />
                  <span>Add to Cart</span>
                </span>
                <span>
                  <IoHeartOutline
                    size="1.5rem"
                    style={{ margin: "0.25rem auto" }}
                  />
                </span>
                <span>
                  <IoGitCompareOutline
                    size="1.5rem"
                    style={{ margin: "0.25rem auto" }}
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return <div>{product1JSX}</div>;
}
