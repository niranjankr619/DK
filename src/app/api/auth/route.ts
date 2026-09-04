import { NextRequest, NextResponse } from 'next/server';
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  createSessionToken,
  verifyPasscode,
} from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { passcode } = body;

    if (!passcode || typeof passcode !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Passcode is required.' },
        { status: 400 }
      );
    }

    // Verify passcode against server environment variable
    const isValid = verifyPasscode(passcode);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid company access code. Access denied.' },
        { status: 401 }
      );
    }

    // Generate signed session token
    const token = await createSessionToken();

    const response = NextResponse.json({
      success: true,
      message: 'Access granted. Welcome to DezinersKnot.',
    });

    // Set secure, HttpOnly browser session cookie (cleared when browser/tab closes)
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal authentication error occurred.' },
      { status: 500 }
    );
  }
}
