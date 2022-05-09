export interface SendMailData {
    subject: string;
    body: string;
}

export interface MailAdapter {
    sednMail: (data: SendMailData) => Promise<void>;
} 