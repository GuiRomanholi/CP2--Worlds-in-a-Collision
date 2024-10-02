"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { TipoImagem } from "@/types";
import React from 'react';
import "../../styles/globals.css"

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
    <div className="flex flex-col min-h-screen">
      <div className="cronologia-container flex-grow">
        <h1 className="cronologia-title">Cronologia dos Eventos</h1>

        <article className="cronologia-article">
          <p className="cronologia-paragraph">
            Ele questionou a cronologia aceita de eventos históricos e astronômicos, propondo que certos eventos catastróficos
            ocorreram em tempos muito mais recentes do que a ciência convencional sugere. A ideia de que planetas poderiam ter 
            mudado de órbita tão recentemente desafiava as teorias astronômicas da época, que se baseavam em cálculos de órbitas 
            estáveis por milhões de anos.
          </p>
        </article>
        <div>
          <Image className="calculo-image" src={typeof(imagem.url) == 'string' ? imagem.url : ""} width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
        </div>
      </div>
    </div>
  );
}
