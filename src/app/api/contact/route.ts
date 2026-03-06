import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, phone } = data;

    const mailHost = process.env.MAIL_HOST;
    const mailPort = process.env.MAIL_PORT;
    const mailSecure = process.env.MAIL_SECURE;
    const nodemailerEmail = process.env.NODEMAILER_EMAIL;
    const nodemailerPassword = process.env.NODEMAILER_PW;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (
      !mailHost ||
      !mailPort ||
      !mailSecure ||
      !nodemailerEmail ||
      !nodemailerPassword ||
      !mailFrom ||
      !mailTo
    ) {
      return NextResponse.json(
        { message: "Mail ayarlari eksik" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: parseInt(mailPort, 10),
      secure: mailSecure === "true",
      auth: {
        user: nodemailerEmail,
        pass: nodemailerPassword,
      },
    });

    const mailData = {
      from: mailFrom,
      to: mailTo,
      subject: `ASD İletişim Formu`,
      text: `
                Full Name : ${name || ""}
                Email : ${email || ""}
        
                Phone: ${phone || ""}
              
                Subject: ${email || ""}
                Message: ${message || ""}
            `,
    };

    await transporter.sendMail(mailData);
    return NextResponse.json(
      { message: "Mail gönderme başarılı" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Mail gönderme başarısız" },
      { status: 400 }
    );
  }
}
