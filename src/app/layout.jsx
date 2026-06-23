import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SafeCare Trade & Engineering — Fire Safety Reimagined",
  description:
    "Bangladesh's most advanced fire safety engineering company. Protecting lives with cutting-edge technology.",
  keywords:
    "fire safety bangladesh, fire alarm system, sprinkler system, gas suppression, fire engineering company",

  openGraph: {
    title: "SafeCare & Trade",
    description: "Bangladesh's #1 Fire Safety Engineering Company",
    type: "website",
    images: [
      {
        url: "/logo.jpeg", 
      },
    ],
  },

  icons: {
    icon: "/logo.jpeg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-dark-900 text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}