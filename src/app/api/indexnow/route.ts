import { NextRequest, NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/indexnow';

async function handlePing(request: NextRequest) {
  const secret = process.env.INDEXNOW_SECRET;
  const provided = request.headers.get('x-indexnow-secret');

  if (!secret || provided !== secret) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await pingIndexNow();
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export const GET = handlePing;
export const POST = handlePing;
