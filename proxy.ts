import { NextRequest, NextResponse } from "next/server";

const privateRoutes = ["/profile", "/notes"];
const publicRoutes = ["/sign-in", "/sign-up"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken");

  const isPublicRoute = publicRoutes.some((r) => pathname.startsWith(r));
  const isPrivateRoute = privateRoutes.some((r) => pathname.startsWith(r));

  if (!accessToken && isPrivateRoute) {
    const loginUrl = new URL("/sign-in", request.url);

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && isPublicRoute) {
    const homeUrl = new URL("/", request.url);

    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/notes/:path*", "/sign-in", "/sign-up"],
};
