import "./reset.scss";
import "./globals.scss";

import Header from "./(header)/Header";
import Providers from "./providers";

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
