import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "සුර්යාපති",
  description: "Astrology serivcerp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="si">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
