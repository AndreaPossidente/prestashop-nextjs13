import Image from "next/image";
import Link from "next/link";

import "./header.scss";

import Navigation from "../Navigation";
import Topbar from "./Topbar";
import LoginIcon from "./LoginIcon";

import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";

interface Props {}

const logo = (
  <Image
    alt="NextShop"
    src={"https://www.jsdev.it/img/logo-1676473843.jpg"}
    width={140}
    height={40}
  />
);

export default function Header({}: Props) {
  return (
    <header>
      {/* @ts-expect-error Server Component */}
      <Topbar />
      <div className="header-main">
        <div className="container">
          <Link href={`/`} passHref>
            {logo}
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
              <Link href={`/`} className="header-icon hide-mobile">
                <IoHelpCircleOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>Assistenza</span>
              </Link>
              <LoginIcon />
              <Link href={`/`} className="header-icon hide-mobile">
                <IoHeartOutline
                  size="1.5rem"
                  style={{ margin: "0.25rem auto" }}
                />
                <span>Wishlist</span>
              </Link>
              <Link href={`/`} className="header-icon">
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
