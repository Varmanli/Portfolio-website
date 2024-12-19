import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, projectType, message } =
      req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "varmanli.ir@gmail.com", 
          pass: "gzedynpxtsdqmenc", 
        },
      });

      await transporter.sendMail({
        from: email,
        to: "varmanliamirhosein@gmail.com",
        subject: `پیام جدید از ${firstName} ${lastName}`,
        text: `
          نام: ${firstName} ${lastName}
          ایمیل: ${email}
          شماره تماس: ${phone}
          نوع پروژه: ${projectType}
          پیام: ${message}
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "خطا در ارسال ایمیل.", details: error.message });
    }
  } else {
    res.status(405).json({ error: "فقط متد POST مجاز است." });
  }
}
