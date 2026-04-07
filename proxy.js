import { NextResponse } from 'next/server';

export function proxy(request) {
    const session = request.cookies.get('admin_session');
    const { pathname } = request.nextUrl;

    // Protect /admin routes, but allow /admin/login
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        if (!session) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
