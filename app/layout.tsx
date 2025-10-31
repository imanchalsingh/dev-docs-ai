import { Inter, Josefin_Sans } from "next/font/google";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import "./globals.css";


// Josefin Sans font configuration
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
  // Optional: Specify weights you need
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "DevResources - Your Programming Hub",
  description: "Comprehensive resources for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className={`${josefinSans.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
