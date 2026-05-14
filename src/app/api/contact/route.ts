import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const { naam, bedrijf, email, telefoon, dienst, bericht } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'FunnelVision <noreply@funnelvisionagency.com>',
    to: 'serdar@funnelvisionagency.com',
    subject: `Nieuwe aanvraag via FunnelVision: ${naam}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F2EB; padding: 32px; border-radius: 12px;">
        <div style="background: #1A1A1A; padding: 24px 32px; border-radius: 8px; margin-bottom: 24px;">
          <span style="color: #F5A623; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Nieuwe aanvraag</span>
          <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0 0 0;">FunnelVision Contact</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; width: 140px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Naam</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${naam}</td>
          </tr>
          ${bedrijf ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Bedrijf</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${bedrijf}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">E-mail</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; vertical-align: top;"><a href="mailto:${email}" style="color: #F5A623; font-size: 15px; text-decoration: none;">${email}</a></td>
          </tr>
          ${telefoon ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Telefoon</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${telefoon}</td>
          </tr>` : ''}
          ${dienst ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Dienst</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${dienst}</td>
          </tr>` : ''}
          ${bericht ? `<tr>
            <td style="padding: 12px 0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Bericht</td>
            <td style="padding: 12px 0; color: #3D3D3D; font-size: 15px; line-height: 1.6; vertical-align: top;">${bericht.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 32px; padding: 16px; background: #fff; border-radius: 8px; border-left: 4px solid #F5A623;">
          <p style="margin: 0; color: #3D3D3D; font-size: 13px;">Beantwoord deze e-mail of stuur direct een bericht naar <a href="mailto:${email}" style="color: #F5A623;">${email}</a></p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Verzenden mislukt' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
