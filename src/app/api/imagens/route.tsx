import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=kXO8zL2dtbE4EU9Uyv8bMDfrgCb0HbPr6FTJ5KCH&count=10");

        if (!response.ok) {
            throw new Error(`Erro ao fazer o fetch: ${response.statusText}`);
        }

        const dados = await response.json();
        return NextResponse.json(dados);

    } catch {
        console.log("Erro ao carregar os dados da API.")
    }
}