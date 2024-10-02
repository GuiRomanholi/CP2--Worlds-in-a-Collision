"use client"

import { TipoImagem } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Velocidade() {

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
    <div className="velocidade-container">
        <h1 className="velocidade-title">Velocidade e Trajetória de Vênus</h1>
        <article className="velocidade-article">
            <p>Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis.</p>
        </article>
        <div>
          <Image className="m-12" src={typeof(imagem.url) == 'string' ? imagem.url : ""}width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
      </div>
    </div>
  )
}
