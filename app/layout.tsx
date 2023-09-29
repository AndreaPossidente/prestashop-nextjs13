import "./reset.scss";
import "./globals.scss";

import Header from "./(header)/Header";
import Providers from "./providers";

import type { Metadata } from "next";
import { CMS } from "@/Prestashop/models";

export async function generateMetadata(): Promise<Metadata> {
  const shop: CMS = await CMS.findOne({ link_rewrite: "index" }).catch(
    (err) => {
      return { meta_title: "404 Page not found", meta_description: "" } as CMS;
    }
  );
  return {
    title: shop.meta_title,
    description: shop.meta_description,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
