import { NextRequest, NextResponse } from 'next/server';

function escHtml(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ipRequestMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= RATE_LIMIT) {
      return Response.json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' }, { status: 429 });
    }
    entry.count++;
  } else {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
  }

  const { naam, bedrijf, email, telefoon, dienst, bericht, website } = await request.json();

  if (website) {
    console.log(`[honeypot] Bot geblokkeerd, IP: ${ip}`);
    return Response.json({ ok: true }, { status: 200 });
  }

  if (!naam || String(naam).trim().length < 2 || String(naam).length > 100) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }
  if (!email || String(email).length > 254 || !emailRegex.test(String(email))) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }
  if (!bericht || String(bericht).trim().length < 10 || String(bericht).length > 5000) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }
  if (bedrijf && String(bedrijf).length > 200) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }
  if (telefoon && String(telefoon).length > 200) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }
  if (dienst && String(dienst).length > 200) {
    return Response.json({ error: 'Ongeldige invoer.' }, { status: 400 });
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F2EB; padding: 32px; border-radius: 12px;">
      <div style="background: #1A1A1A; padding: 24px 32px; border-radius: 8px; margin-bottom: 24px;">
        <span style="color: #F5A623; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Nieuwe aanvraag</span>
        <h1 style="color: #ffffff; font-size: 24px; margin: 8px 0 0 0;">FunnelVision Contact</h1>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; width: 140px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Naam</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${escHtml(naam)}</td>
        </tr>
        ${bedrijf ? `<tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Bedrijf</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${escHtml(bedrijf)}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">E-mail</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; vertical-align: top;"><a href="mailto:${escHtml(email)}" style="color: #F5A623; font-size: 15px; text-decoration: none;">${escHtml(email)}</a></td>
        </tr>
        ${telefoon ? `<tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Telefoon</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${escHtml(telefoon)}</td>
        </tr>` : ''}
        ${dienst ? `<tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Klantdoel</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0ddd6; color: #3D3D3D; font-size: 15px; vertical-align: top;">${escHtml(dienst)}</td>
        </tr>` : ''}
        ${bericht ? `<tr>
          <td style="padding: 12px 0; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Bericht</td>
          <td style="padding: 12px 0; color: #3D3D3D; font-size: 15px; line-height: 1.6; vertical-align: top;">${escHtml(bericht).replace(/\n/g, '<br>')}</td>
        </tr>` : ''}
      </table>
      <div style="margin-top: 32px; padding: 16px; background: #fff; border-radius: 8px; border-left: 4px solid #F5A623;">
        <p style="margin: 0; color: #3D3D3D; font-size: 13px;">Beantwoord deze e-mail of stuur direct een bericht naar <a href="mailto:${escHtml(email)}" style="color: #F5A623;">${escHtml(email)}</a></p>
      </div>
    </div>
  `;

  const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY ?? '',
    },
    body: JSON.stringify({
      sender: { name: 'FunnelVision', email: 'serdar@funnelvisionagency.com' },
      to: [{ email: 'serdar@funnelvisionagency.com' }],
      subject: `Nieuwe aanvraag via FunnelVision: ${escHtml(naam)}`,
      htmlContent,
    }),
  });

  if (!brevoRes.ok) {
    console.error('[brevo] verzenden mislukt', brevoRes.status, await brevoRes.text());
    return NextResponse.json({ error: 'Verzenden mislukt' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
