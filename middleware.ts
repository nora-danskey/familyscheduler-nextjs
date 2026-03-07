import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL(request.nextUrl.pathname.slice(0, -1), request.url), 301)
  }
}
