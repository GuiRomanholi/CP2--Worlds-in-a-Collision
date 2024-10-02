"use client"

import { TipoImagem } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Velocidade() {

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
            console.log("ERRO");
        }
    }

    chamadaApi()
}, []);

  return (
    <div className="velocidade-container">
        <h1 className="velocidade-title">Velocidade e Trajetória de Vênus</h1>
        <article className="velocidade-article">
            <p>Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis.</p>
        </article>
        <div>
          <Image className="m-12" src={typeof(imagem.url) == 'string' ? imagem.url : ""}width={500} height={250}alt={typeof(imagem.explanation) == 'string' ? imagem.explanation : ""}/>
          <p className="Ps">{imagem.explanation}</p>
      </div>
    </div>
  )
}
