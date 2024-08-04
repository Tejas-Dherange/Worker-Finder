import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/" ||
    path === "/register" ||
    path === "/login" ||
    path === "/listing";
  const isAuthPath = path === "/register" || path === "/login";
  const isProtectedPath = path === "/profile" || path === "/account";

  // const token = request.cookies.get("token")?.value || "";
  const token = await getToken({ req: request, secret });
  // console.log(token);

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/register", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/register", "/login", "/listing", "/account"],
};
