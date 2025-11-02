import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, phone } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailData = {
      from: process.env.MAIL_FROM,
      to: `${process.env.MAIL_TO}`,
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
