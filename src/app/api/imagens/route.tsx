import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=aziimFV1LXEzbGMhsqLiAFBnw5g6fIH09Xo4oDiJ&count=10");
    const dados = await response.json()
    return NextResponse.json(dados);
}