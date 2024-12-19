import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "امیرحسین ورمانلی | برنامه‌نویس وب",
  description:
    "من امیرحسین ورمانلی، برنامه‌نویس وب متخصص در React، Next.js و Tailwind هستم. با توانایی در طراحی و توسعه وب‌سایت‌های مدرن و کاربرپسند، آماده همکاری در پروژه‌های حرفه‌ای و خلاقانه هستم.",
  keywords: [
    "برنامه‌نویس وب",
    "توسعه‌دهنده وب",
    "React",
    "Next.js",
    "Tailwind",
    "امیرحسین ورمانلی",
    "طراحی وب",
    "توسعه وب",
    "سایت‌های ریسپانسیو",
  ],
  author: "امیرحسین ورمانلی",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://varmanli.ir",
    title: "امیرحسین ورمانلی | برنامه‌نویس وب",
    description:
      "برنامه‌نویس وب متخصص در توسعه وب‌سایت‌های حرفه‌ای و خلاقانه با استفاده از React و Next.js.",
    siteName: "امیرحسین ورمانلی",
  },
  twitter: {
    card: "summary_large_image",
    title: "امیرحسین ورمانلی | برنامه‌نویس وب",
    description:
      "من امیرحسین ورمانلی، متخصص در طراحی و توسعه وب‌سایت‌های مدرن و زیبا با استفاده از React، Next.js و Tailwind.",
    creator: "@your-twitter-handle",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "google76f6da39e0e22527.html",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="TThIB43bX-D9bOgzEsrmtPKSxDJ2fXayV6h2CE1IsVo"
        />
      </head>
      <body style={{ fontFamily: "var(--f)" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
