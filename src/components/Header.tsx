import Image from "next/image";
import Link from "next/link";

import Navigation from "./Navigation";
import Topbar from "./Topbar";

import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface Props {}

export default async function Header({}: Props) {
  return (
    <header>
      {/* @ts-expect-error Server Component */}
      <Topbar />
      <div className="header-main">
        <div className="container">
          <Link href={"/"}>
            <Image
              alt="NextShop"
              src={"https://www.jsdev.it/img/logo-1676473843.jpg"}
              style={{ objectFit: "contain" }}
              width={140}
              height={40}
            />
          </Link>
          <div className="search-container">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Cerca un prodotto..."
            />
          </div>
          <div className="header-right">
            <div className="header-icons">
              <Link href={"/"} className="header-icon hide-mobile">
                <IoHelpCircleOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>Assistenza</span>
              </Link>
              <Link href={"/"} className="header-icon">
                <IoPersonOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>Accedi</span>
              </Link>
              <Link href={"/"} className="header-icon hide-mobile">
                <IoHeartOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>Wishlist</span>
              </Link>
              <Link href={"/"} className="header-icon">
                <IoBagHandleOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>0,00 €</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <Navigation />
    </header>
  );
}
