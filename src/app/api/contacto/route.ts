import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(req: Request) {
  const { email, mensaje } = await req.json();
  try {
    if (!resend) throw new Error('No API key');
    await resend.emails.send({
      from: 'contacto@ejemplo.com',
      to: ['destino@ejemplo.com'],
      subject: 'Nuevo mensaje de contacto',
      text: `Email: ${email}\nMensaje: ${mensaje}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
