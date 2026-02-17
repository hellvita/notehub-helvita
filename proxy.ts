import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { checkSession } from "./lib/api/serverApi";

const privateRoutes = ["/profile", "/notes"];
const publicRoutes = ["/sign-in", "/sign-up"];

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some((r) => pathname.startsWith(r));
  const isPrivateRoute = privateRoutes.some((r) => pathname.startsWith(r));

  if (accessToken) {
    if (isPublicRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (refreshToken) {
    try {
      const res = await checkSession();
      const isAuthenticated = res.data?.success;
      const setCookie = res.headers["set-cookie"];

      if (isAuthenticated) {
        if (setCookie) {
          const headers = new Headers();

          for (const cookie of setCookie) {
            headers.append("Set-Cookie", cookie);
          }

          if (isPublicRoute) {
            return NextResponse.redirect(new URL("/", request.url), {
              headers,
            });
          }

          return NextResponse.next({
            request: {
              headers: headers,
            },
          });
        }

        return isPublicRoute
          ? NextResponse.redirect(new URL("/", request.url))
          : NextResponse.next();
      }
    } catch {
      const response = NextResponse.redirect(new URL("/login", request.url));

      response.cookies.delete("refreshToken");
      response.cookies.delete("accessToken");

      return response;
    }
  }

  if (isPublicRoute) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: ["/profile/:path*", "/notes/:path*", "/sign-in", "/sign-up"],
};
