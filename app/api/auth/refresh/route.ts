import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { checkSession } from "@/lib/api/serverApi";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const data = await checkSession();

  const next = NextResponse.json({ ok: true });

  const setCookie = data.headers["set-cookie"];

  if (setCookie) {
    const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

    cookieArray.forEach((cookie) => {
      next.headers.append("Set-Cookie", cookie);
    });
  }

  return next;
}
