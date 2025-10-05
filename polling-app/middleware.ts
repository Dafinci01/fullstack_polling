import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/polls/create',
  '/profile',
];

// Define routes that are only for non-authenticated users
const authRoutes = [
  '/auth/login',
  '/auth/register',
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res: response });
  
  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  const path = request.nextUrl.pathname;
  
  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));
  const isAuthRoute = authRoutes.some(route => path.startsWith(route));
  
  // Redirect authenticated users away from auth pages
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Redirect unauthenticated users away from protected pages
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  return response;
}

export const config = {
  // Skip middleware for static files and API routes
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};