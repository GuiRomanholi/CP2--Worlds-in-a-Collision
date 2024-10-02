import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=aziimFV1LXEzbGMhsqLiAFBnw5g6fIH09Xo4oDiJ&count=10");

        if (!response.ok) {
            throw new Error(`Erro ao fazer o fetch: ${response.statusText}`);
        }

        const dados = await response.json();
        return NextResponse.json(dados);

    } catch {
        console.log("Erro ao carregar os dados da API.")
    }
}