import { primary } from "@/configs/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className={`${primary.variable} font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
