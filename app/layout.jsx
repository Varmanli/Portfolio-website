import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Amirhosein Varmanli",
  description: "Front-end developer by React , Nextjs , Tailwind ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="google76f6da39e0e22527"
        />
      </head>
      <body style={{ fontFamily: "var(--f)" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
