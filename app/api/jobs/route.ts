import { NextRequest, NextResponse } from "next/server";
import data from "../../data/data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const id = parseInt(searchParams.get("id") || "");

  const result = data.filter((item) => !id || item.id === id);
  return NextResponse.json(result);
}
