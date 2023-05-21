import { Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
// import Providers from "@/redux/provider";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Country API",
  description: "REST Countries API",
  keywords:
    "REST api, country API, web development, React Project, Redux Project, Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
