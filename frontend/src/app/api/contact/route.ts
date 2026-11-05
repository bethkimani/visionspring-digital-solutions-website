import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/data/site';

interface ContactRequestBody {
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  service?: string;
  serviceLabel?: string;
  packageName?: string;
  description?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json().catch(() => ({}));
    const {
      fullName = '',
      organization = '',
      email = '',
      phone = '',
      service = '',
      serviceLabel: clientServiceLabel = '',
      packageName = '',
      description = '',
    } = body;

    // Validate required fields
    if (!fullName.trim()) {
      return NextResponse.json(
        { error: 'Please provide your full name.' },
        { status: 400 }
      );
    }

    if (!phone.trim()) {
      return NextResponse.json(
        { error: 'Please provide your phone number.' },
        { status: 400 }
      );
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!service.trim()) {
      return NextResponse.json(
        { error: 'Please choose a service.' },
        { status: 400 }
      );
    }

    if (!description.trim()) {
      return NextResponse.json(
        { error: 'Please provide project details.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Graceful check if Resend is not configured yet in .env
    if (!apiKey) {
      console.warn(
        '[VisionSpring Contact Form] RESEND_API_KEY is not defined in environment variables. Lead details logged:',
        { fullName, organization, phone, email, service, description }
      );
      return NextResponse.json(
        {
          error: 'Email delivery is currently unconfigured. Please add RESEND_API_KEY to your environment variables.',
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || site.email || 'visionspringagency@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'VisionSpring Agency <onboarding@resend.dev>';

    const serviceDisplay = clientServiceLabel || service || 'General Project Enquiry';
    const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');

    // High-visibility, concise subject line
    const subjectPrefix = `[IMPORTANT] New Project Enquiry - ${fullName.trim()}`;

    // Modern, executive-styled HTML email
    const htmlEmail = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subjectPrefix}</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">
          <div style="max-width: 620px; margin: 32px auto; background-color: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
            
            <!-- Brand Navy Header -->
            <div style="background-color: #04142E; padding: 32px 28px; text-align: left; border-bottom: 3px solid #1EA7E1;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(30, 167, 225, 0.18); border: 1px solid rgba(30, 167, 225, 0.4); color: #7dd3fc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; padding: 4px 10px; border-radius: 9999px;">
                      New Client Lead
                    </span>
                    <h1 style="color: #ffffff; margin: 10px 0 4px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.4px;">
                      VisionSpring Agency
                    </h1>
                    <p style="color: #94a3b8; margin: 0; font-size: 13px;">
                      Direct enquiry submitted via <a href="${site.url || 'https://www.visionspringagency.com'}" style="color: #38bdf8; text-decoration: none;">visionspringagency.com</a>
                    </p>
                  </td>
                  <td style="text-align: right; vertical-align: middle;">
                    <span style="font-size: 28px;">💼</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Email Body Content -->
            <div style="padding: 32px 28px;">
              
              <div style="margin-bottom: 24px;">
                <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0;">
                  A new client has requested a project consultation through the website enquiry form:
                </p>
              </div>

              <!-- Client Contact Information Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #0284c7;">
                  Client Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 38%;">Full Name:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${fullName}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
                      <td style="padding: 10px 0;">
                        <a href="tel:${phone}" style="color: #04142E; text-decoration: none; font-weight: 700; font-size: 15px;">
                          ${phone}
                        </a>
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                      <td style="padding: 10px 0;">
                        <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">
                          ${email}
                        </a>
                      </td>
                    </tr>
                    ${
                      organization
                        ? `
                    <tr>
                      <td style="padding: 10px 0 0 0; color: #64748b; font-weight: 600;">Organization:</td>
                      <td style="padding: 10px 0 0 0; color: #0f172a; font-weight: 600;">${organization}</td>
                    </tr>`
                        : ''
                    }
                  </tbody>
                </table>
              </div>

              <!-- Project Scope Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #0284c7;">
                  Requested Service
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tbody>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 38%;">Service:</td>
                      <td style="padding: 8px 0; color: #0284c7; font-weight: 700; font-size: 15px;">${serviceDisplay}</td>
                    </tr>
                    ${
                      packageName
                        ? `
                    <tr style="border-top: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0 0 0; color: #64748b; font-weight: 600;">Selected Package:</td>
                      <td style="padding: 10px 0 0 0; color: #0f172a; font-weight: 700;">${packageName}</td>
                    </tr>`
                        : ''
                    }
                  </tbody>
                </table>
              </div>

              <!-- Project Description Card -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #475569;">
                  Project Requirements / Brief
                </h2>
                <div style="padding: 18px 20px; background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #1EA7E1; border-radius: 10px; font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap;">${description}</div>
              </div>

              <!-- Fast Action Reply Buttons -->
              <div style="padding: 24px 0 10px 0; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="margin: 0 0 14px 0; font-size: 13px; font-weight: 600; color: #64748b;">
                  Quick Client Response:
                </p>
                <div style="display: inline-block;">
                  <a
                    href="https://wa.me/${cleanPhoneDigits}?text=Hello%20${encodeURIComponent(
                      fullName
                    )}%2C%20thank%20you%20for%20reaching%20out%20to%20VisionSpring%20Agency.%20We%20received%20your%20inquiry%20regarding%20${encodeURIComponent(
                      serviceDisplay
                    )}."
                    style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    💬 WhatsApp Client (${phone})
                  </a>
                  <a
                    href="tel:${phone}"
                    style="display: inline-block; background-color: #04142E; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    📞 Call Client
                  </a>
                  <a
                    href="mailto:${email}?subject=${encodeURIComponent(
                      `Re: Your VisionSpring Project Inquiry (${serviceDisplay})`
                    )}"
                    style="display: inline-block; background-color: #0284c7; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    ✉️ Reply via Email
                  </a>
                </div>
              </div>

            </div>

            <!-- Sleek Footer -->
            <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
              <p style="margin: 0 0 4px 0; font-weight: 600; color: #04142E;">
                VisionSpring Agency • Digital Solutions. Real Growth.
              </p>
              <p style="margin: 0; color: #94a3b8;">
                Nairobi, Kenya • <a href="mailto:visionspringagency@gmail.com" style="color: #64748b; text-decoration: underline;">visionspringagency@gmail.com</a>
              </p>
            </div>

          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: `${fullName.trim()} <${email.trim()}>`,
      subject: subjectPrefix,
      html: htmlEmail,
    });

    if (error) {
      console.error('[VisionSpring Contact Form] Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('[VisionSpring Contact Form] Unexpected error in /api/contact:', err);
    return NextResponse.json(
      { error: `An unexpected error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
