
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const { data } = await supabase.auth.getSession();

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.session?.user.id)
    .single();

  if (user) {
    return res;
  } else {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/polls/create"],
};
