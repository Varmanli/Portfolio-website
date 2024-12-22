"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "#ffffff", color: "#000000", padding: 30, textAlign: "right" },
  header: { fontSize: 24, marginBottom: 10, fontWeight: "bold", color: "#333" },
  section: { marginBottom: 10 },
  text: { fontSize: 12, marginBottom: 5 },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>امیرحسین ورمانلی</Text>
        <Text style={styles.text}>توسعه‌دهنده وب</Text>
        <Text style={styles.text}>تلفن: ۰۹۰۱۶۸۲۸۲۷۰ | ایمیل: varmanliamirhosein@gmail.com</Text>
        <Text style={styles.text}>وب‌سایت: varmanli.ir | گیت‌هاب: github.com/varmanli</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>درباره من</Text>
        <Text style={styles.text}>
          من امیرحسین ورمانلی، توسعه‌دهنده وب با علاقه‌مندی به طراحی و ساخت وب‌سایت‌های جذاب و کاربردی هستم. از
          ایده‌پردازی تا اجرای نهایی، همواره در تلاش بوده‌ام تجربه‌ای راحت و دوست‌داشتنی برای کاربران ایجاد کنم.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>مهارت‌ها</Text>
        <Text style={styles.text}>فرانت‌اند: HTML، CSS، JavaScript، React، Next.js</Text>
        <Text style={styles.text}>بک‌اند: Node.js، Express، MongoDB</Text>
        <Text style={styles.text}>ابزارها: Git، Docker، Figma</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>تجربه کاری</Text>
        <Text style={styles.text}>فریلنسر توسعه‌دهنده وب (۱۳۹۷ - اکنون)</Text>
        <Text style={styles.text}>
          طراحی و توسعه وب‌سایت‌های متنوع برای مشتریان با استفاده از فناوری‌های مدرن و بهینه‌سازی وب‌سایت‌ها برای
          بهبود سرعت و تجربه کاربری.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>پروژه‌های منتخب</Text>
        <Text style={styles.text}>وب‌سایت شخصی امیرحسین ورمانلی - varmanli.ir</Text>
        <Text style={styles.text}>ابزارهای کاربردی وب - مجموعه‌ای از ابزارهای ساده و کاربردی.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>تحصیلات</Text>
        <Text style={styles.text}>کارشناسی علوم کامپیوتر - دانشگاه تهران (۱۳۹۳ - ۱۳۹۷)</Text>
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  return (
    <div className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto text-right">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">امیرحسین ورمانلی</h1>
          <p className="text-lg text-gray-600">توسعه‌دهنده وب</p>
          <p className="mt-2 text-sm text-gray-500">
            شماره تماس: ۰۹۰۱۶۸۲۸۲۷۰ | ایمیل: varmanliamirhosein@gmail.com
          </p>
          <p className="text-sm text-gray-500">
            وب‌سایت: <a href="https://varmanli.ir" className="text-blue-600">varmanli.ir</a>
          </p>
          <p className="text-sm text-gray-500">
            گیت‌هاب: <a href="https://github.com/varmanli" className="text-blue-600">github.com/varmanli</a>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">درباره من</h2>
          <p className="text-gray-700 leading-relaxed">
            من امیرحسین ورمانلی، توسعه‌دهنده وب با علاقه‌مندی به طراحی و ساخت وب‌سایت‌های جذاب و کاربردی هستم. از ایده‌پردازی تا اجرای نهایی، همواره در تلاش بوده‌ام تجربه‌ای راحت و دوست‌داشتنی برای کاربران ایجاد کنم.
          </p>
        </section>

        <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
          {({ loading }) => (
            <button className="px-4 py-2 bg-blue-600 text-white rounded mt-4">
              {loading ? "در حال آماده‌سازی..." : "دانلود رزومه"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume;
