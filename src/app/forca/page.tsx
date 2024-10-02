"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { TipoImagem } from "@/types";
import React from 'react'
import "../../styles/globals.css";

export default function Forca() {

  const [imagem, setImagem] = useState<TipoImagem>({copyright:"", date:"",explanation:"",hdurl:"",media_type:"",service_version:"",title:"",url:""});
    useEffect(() => {
      async function chamadaApi() {
          try {
            const response = await fetch('http://localhost:3000/api/Imagens');
            const jsonData = await response.json();
            const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
            const indice = numeroAleatorio(0, 9);
            setImagem(jsonData[indice]);
          } catch {
              console.log("ERRO");
          }
      }

      chamadaApi()
  }, []);


  return (
    <div className="forca-container">
        <h1 className="forca-title">Forças Gravitacionais e Eletromagnéticas</h1>
        <article className="forca-article">
            <p>Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias.</p>
        </article>
        <div >
          <Image src={typeof(imagem.url) == 'string' ? imagem.url : ""}width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
          <p className="Ps">{imagem.explanation}</p>
        </div>
    </div>
  )
}
