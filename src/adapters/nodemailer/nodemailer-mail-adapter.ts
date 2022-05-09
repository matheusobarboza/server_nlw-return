import nodemailer from 'nodemailer'; 
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3e23c07a546d25",
    pass: "d226e9654a4e9d",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sednMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Fedget <oi@fedget.com>",
      to: "Matheus Barboza <matheus.barboza102@gmail.com>",
      subject,
      html: body,
    });
  }
}
