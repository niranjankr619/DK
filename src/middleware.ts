import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SESSION_COOKIE_NAME, verifySessionToken } from '@/lib/auth';

// Paths that are accessible without authentication
const PUBLIC_PATHS = [
  '/login',
  '/api/auth',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Allow Next.js internal static assets & images
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') && !pathname.endsWith('.pdf') // Allow icons, css, js but protect proprietary PDFs
  ) {
    // If it's a proprietary overview PDF, require authentication
    if (pathname.endsWith('.pdf')) {
      const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
      const isValid = await verifySessionToken(sessionToken);
      if (!isValid) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
    return NextResponse.next();
  }

  // 2. Check if the path is an allowed public route (like /login or /api/auth)
  const isPublicPath = PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(path + '/'));

  // 3. Check Session Cookie validity
  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = await verifySessionToken(sessionToken);

  // 4. Redirect unauthenticated users to /login
  if (!isAuthenticated && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    // Optional: preserve target destination
    if (pathname !== '/') {
      loginUrl.searchParams.set('redirect', pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  // 5. If authenticated user attempts to visit /login, redirect back to main app
  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files with standard image/asset extensions
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
