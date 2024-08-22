import { NextResponse } from 'next/server';

export function middleware(req) {
    if (req.nextUrl.pathname === '/favicon.ico') {
        // Return a 404 response or another response as needed
        return new NextResponse(null, { status: 404 });
    }
    return NextResponse.next();
}