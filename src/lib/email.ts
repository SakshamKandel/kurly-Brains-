import nodemailer from 'nodemailer';

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || "sakshamkandelofficial@gmail.com",
        pass: process.env.SMTP_PASS || "nxsstpyqsaoljipe",
    },
});

export interface ConsultationData {
    name: string;
    email: string;
    details: string;
    serviceOfInterest?: string;
}

export const sendConsultationEmail = async (data: ConsultationData) => {
    if (!process.env.SMTP_HOST) {
        console.warn("⚠️ SMTP_HOST not set. Email simulation mode.");
        console.log("Would send email to team:", data);
        return { success: true, simulated: true };
    }

    try {
        // Send email to the specific team address
        const info = await transporter.sendMail({
            from: `"Kurly AI" <${process.env.SMTP_USER}>`, // sender address
            to: "tech@kurlybrains.com", // list of receivers
            subject: `🚀 New Consultation Request: ${data.name}`, // Subject line
            text: `
New Consultation Request from Kurly AI Chat

Name: ${data.name}
Email: ${data.email}
Service: ${data.serviceOfInterest || "Not specified"}

Request Details:
${data.details}

---
Sent by Kurly AI Virtual Receptionist
      `, // plain text body
            html: `
        <div style="font-family: sans-serif; color: #333;">
            <h2>🚀 New Consultation Request</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Service:</strong> ${data.serviceOfInterest || "General Inquiry"}</p>
            <hr />
            <h3>Request Details:</h3>
            <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px;">${data.details}</p>
            <hr />
            <p style="font-size: 12px; color: #888;">Sent by Kurly AI Virtual Receptionist</p>
        </div>
      `, // html body
        });

        console.log("Message sent: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
};
