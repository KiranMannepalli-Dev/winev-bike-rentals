import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Contact form logic will be implemented in a later phase
  return NextResponse.json({ success: true, message: 'Message received.' });
}
