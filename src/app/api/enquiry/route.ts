import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Enquiry logic, including validation, rate limiting, and notifications,
  // will be implemented in a later phase.
  return NextResponse.json({ success: true, message: 'Enquiry received.' });
}
