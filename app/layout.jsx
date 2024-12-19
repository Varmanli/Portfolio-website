import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "امیرحسین ورمانلی | توسعه‌دهنده فرانت‌اند",
  description:
    "من امیرحسین ورمانلی، توسعه‌دهنده فرانت‌اند متخصص در React، Next.js و Tailwind هستم. با تخصص در خلق رابط‌های کاربری مدرن و بهینه، آماده همکاری برای پروژه‌های خلاقانه و حرفه‌ای هستم.",
  keywords: [
    "توسعه‌دهنده فرانت‌اند",
    "برنامه‌نویسی وب",
    "React",
    "Next.js",
    "Tailwind",
    "امیرحسین ورمانلی",
    "طراحی رابط کاربری",
    "سایت‌های مدرن",
  ],
  author: "امیرحسین ورمانلی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://varmanli.ir",
    title: "امیرحسین ورمانلی | توسعه‌دهنده فرانت‌اند",
    description:
      "توسعه‌دهنده فرانت‌اند متخصص در React و Next.js با تمرکز بر خلق رابط‌های کاربری زیبا و کاربردی.",
    siteName: "امیرحسین ورمانلی",
  },
  twitter: {
    card: "summary_large_image",
    title: "امیرحسین ورمانلی | توسعه‌دهنده فرانت‌اند",
    description:
      "من امیرحسین ورمانلی، متخصص در توسعه رابط‌های کاربری خلاقانه و مدرن با استفاده از React، Next.js و Tailwind.",
    creator: "@your-twitter-handle",
  },
  icons: {
    icon: "/favicon.ico", 
  },
  other: {
    "google-site-verification": "google76f6da39e0e22527",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: "var(--f)" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
