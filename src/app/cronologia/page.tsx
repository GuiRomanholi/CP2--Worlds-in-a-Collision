"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { TipoImagem } from "@/types";
import React from 'react';

export default function Cronologia() {

  const [imagem, setImagem] = useState<TipoImagem>({copyright:"", date:"",explanation:"",hdurl:"",media_type:"",service_version:"",title:"",url:""});
    useEffect(() => {
      async function chamadaApi() {
          try {
            const response = await fetch('http://localhost:3000/api/Imagens');
            const jsonData = await response.json();
            // Número aleatório entre 0 e 9
            const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
            const indice = numeroAleatorio(0, 9);
            setImagem(jsonData[indice]);
          } catch {
              console.log("ERRO nossa api");
          }
      }

      chamadaApi()
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
          <Image src={typeof(imagem.url) == 'string' ? imagem.url : ""} width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
          <p className="Ps">{imagem.explanation}</p>
        </div>
      </div>
    </div>
  );
}
