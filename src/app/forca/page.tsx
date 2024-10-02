"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { TipoImagem } from "@/types";

export default function Cronologia() {
  const [imagem, atualizarImagem] = useState<TipoImagem>({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  });

  useEffect(() => {
    const buscarImagens = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/api/Imagens');
        const dados = await resposta.json();
        
        const obterIndiceAleatorio = (min: number, max: number) => 
          Math.floor(Math.random() * (max - min)) + min;
        
        const indiceSelecionado = obterIndiceAleatorio(0, 9);
        atualizarImagem(dados[indiceSelecionado]);
      } catch (erro) {
        console.error("Erro ao buscar imagens:", erro);
      }
    };

    buscarImagens();
  }, []);


  return (
    <div className="forca-container">
        <h1 className="forca-title">Forças Gravitacionais e Eletromagnéticas</h1>
        <article className="forca-article">
            <p>Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias.</p>
        </article>
        <div>
          <Image className="m-12" src={typeof (imagem.url) == 'string' ? imagem.url : ""} width={500} height={250} alt={typeof (imagem.explanation) == 'string' ? imagem.explanation : ""} />
        </div>
    </div>
  )
}
