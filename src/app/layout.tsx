import "../app/scss/main.scss";

import Header from "../components/Header";

interface Props {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
      </body>
    </html>
  );
}
