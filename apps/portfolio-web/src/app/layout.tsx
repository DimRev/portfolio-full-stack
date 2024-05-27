import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import AppHeader from "~/components/layout/components/app-header";
import AppFooter from "~/components/layout/components/app-footer";

export const metadata = {
  title: "Portfolio - Dima Rev",
  description: "Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
