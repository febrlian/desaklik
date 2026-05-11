import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/", "/produk", "/layanan", "/manfaat", "/login"];
const ADMIN_PATHS = ["/dashboard", "/warga", "/surat", "/jejak", "/berita", "/peta", "/aset", "/pengaturan"];
const PORTAL_PATHS = ["/beranda", "/ajukan", "/lacak", "/info"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("desaklik-auth");
  const isAuthenticated = !!authCookie?.value;

  if (!isAuthenticated && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
