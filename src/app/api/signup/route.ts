import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as {
      businessName?: string;
      contactName?: string;
      email?: string;
      phone?: string;
      businessType?: string;
      location?: string;
      whatsapp?: string;
      facebook?: string;
      instagram?: string;
    };

    const required: Array<keyof typeof data> = [
      "businessName",
      "contactName",
      "email",
      "phone",
      "businessType",
      "location",
    ];

    for (const f of required) {
      if (!data[f] || String(data[f]).trim() === "") {
        return NextResponse.json({ error: `${f} is required` }, { status: 400 });
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!/^\+?[0-9]{7,15}$/.test(String(data.phone))) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }
    if (data.whatsapp && !/^\+?[0-9]{7,15}$/.test(String(data.whatsapp))) {
      return NextResponse.json({ error: "Invalid WhatsApp number" }, { status: 400 });
    }
    if (data.facebook && !/^https?:\/\//i.test(String(data.facebook))) {
      return NextResponse.json({ error: "Invalid Facebook URL" }, { status: 400 });
    }
    if (data.instagram && !/^@?\w{1,30}$/i.test(String(data.instagram))) {
      return NextResponse.json({ error: "Invalid Instagram handle" }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
