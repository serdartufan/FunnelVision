import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/indexnow';

export async function GET() {
  try {
    await pingIndexNow();
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
