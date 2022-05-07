
import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "USER_MAIL",
        pass: "PASS_MAIL"
    }
});



export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        transport.sendMail({
            from: 'Equipe feedget<oi@feedget.com>',
            to: 'João Batista de lima Júnior <joaobatistalimajunior.ads@gmail.com>', subject: subject,
            html: body,

        })

    }
}