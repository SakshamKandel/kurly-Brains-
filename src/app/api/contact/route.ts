import { NextResponse } from 'next/server';
import { sendConsultationEmail } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using existing utility
        // Mapping "message" to "details" for compatibility with ConsultationData interface
        const result = await sendConsultationEmail({
            name,
            email,
            details: message,
            serviceOfInterest: "Contact Form Submission"
        });

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Message sent successfully' });
        } else {
            console.error('Email sending failed:', result.error);
            return NextResponse.json(
                { error: 'Failed to send message' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
