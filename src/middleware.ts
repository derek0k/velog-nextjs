import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("path redirection!!!");
    return NextResponse.redirect(new URL("/products", request.url));
  }
  console.log("middle ware!!!");
}

export const config = {
  matcher: ["/products/:path+"],
};
