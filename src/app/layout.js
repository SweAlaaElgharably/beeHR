import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { VisibilityProvider } from "@/hooks/useVisibility";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bee HR",
  description: "#",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const direction = (locale === "ar")? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <body className={`${geistSans.variable} antialiased`}>
        <NextIntlClientProvider>
          <VisibilityProvider>
            {children}
          </VisibilityProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}