import { customAxios } from "@@/lib/api/axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await customAxios
    .head("/auth")
    .catch((err) => NextResponse.redirect(new URL("/", request.url)));
  return NextResponse.rewrite(new URL(request.url));
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/account",
};
