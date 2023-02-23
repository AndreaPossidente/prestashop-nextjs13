import "./homepage.scss";

import { Suspense } from "react";
import ProductList from "./ProductList";
import { CMS } from "@/Prestashop/models";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const shop: CMS = await CMS.findOne({ link_rewrite: "index" }).catch(
    (err) => undefined
  );

  type PageInterface = [
    {
      type?: string | null;
      title?: string | null;
      limit?: number | null;
      offset?: number | null;
    }
  ];

  const page: PageInterface = await JSON.parse(
    shop.content.replace("<p>", "").replace("</p>", "")
  );

  if (!shop) {
    notFound();
  }

  let sectionKey = 0;

  return (
    <main>
      <div className="container">
        <section className="hero"></section>
        <section className="section">
          {page.map((section) => {
            if (section.type == "products") {
              return (
                <>
                  <h1>{section.title}</h1>
                  <Suspense
                    key={sectionKey}
                    fallback={<ProductPlaceholder items={section.limit || 5} />}
                  >
                    {/* @ts-expect-error Server Component */}
                    <ProductList section={section} />
                  </Suspense>
                </>
              );
              sectionKey++;
            }
          })}
        </section>
      </div>
    </main>
  );
}

function ProductPlaceholder({ items }: { items: number }) {
  const placeholders = [];

  for (let i = 0; i < items; i++)
    placeholders.push(
      <div className="product" style={{ minHeight: "277px" }}>
        <div
          className="product-image animated-box"
          style={{ minHeight: "224px" }}
        ></div>
        <div
          className="product-manufacturer animated-box"
          style={{
            minHeight: "16px",
            width: "55%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <div
          className="product-name animated-box"
          style={{
            minHeight: "16.66px",
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <div
          className="product-category animated-box"
          style={{
            minHeight: "16px",
            width: "65%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <div className="product-prices">
          <div
            className="product-price animated-box"
            style={{ minHeight: "16px", minWidth: "20%" }}
          ></div>
          <div
            className="product-price-reduced animated-box"
            style={{ minHeight: "16px", minWidth: "20%" }}
          ></div>
        </div>
        <div className="product-buttons">
          <span
            className="animated-box"
            style={{ minHeight: "40px", minWidth: "112px", border: "none" }}
          ></span>
          <span
            className="animated-box"
            style={{ minHeight: "40px", minWidth: "36px", border: "none" }}
          ></span>
          <span
            className="animated-box"
            style={{ minHeight: "40px", minWidth: "36px", border: "none" }}
          ></span>
        </div>
      </div>
    );

  return (
    <>
      <h1 className="animated-box"></h1>
      <div className="products">{placeholders}</div>
    </>
  );
}
