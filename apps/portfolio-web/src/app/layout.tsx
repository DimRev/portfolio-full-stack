import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import AppHeader from "~/features/layout/components/app-header";
import AppFooter from "~/features/layout/components/app-footer";
import { ThemeProvider } from "~/features/layout/components/theme-provider";

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
      <body className="flex flex-col min-h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          {children}
          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
