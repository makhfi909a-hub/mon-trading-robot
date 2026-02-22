import { NextResponse } from 'next/server';
let currentCommand = { action: 'NONE', symbol: 'XAUUSD', timestamp: Date.now(), mode: 'MANUAL', lot: 0.10 };
export async function GET() { return NextResponse.json(currentCommand); }
export async function POST(req: Request) { 
    const body = await req.json();
    currentCommand = { action: body.action || 'NONE', symbol: body.symbol || 'XAUUSD', lot: body.lot || 0.10, timestamp: Date.now(), mode: body.mode || 'MANUAL' };
    return NextResponse.json({ success: true, command: currentCommand });
  }
