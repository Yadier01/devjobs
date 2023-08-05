import { NextRequest, NextResponse } from "next/server";
import data from "../../data.json";

export async function GET(request: NextRequest) {
  const url = new URL(request.nextUrl);
  const id = parseInt(url.searchParams.get("id") || "");

  const result = id ? data.filter((item) => item.id === id) : data;
  return NextResponse.json(result);
}
