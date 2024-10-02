import React from 'react'
import Image from "next/image";

export default function Home() {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Worlds in a Collision</h1>

      <article className='home-article'>
        <p>Descubra os mistérios por trás das catástrofes cósmicas que moldaram
          a Terra e a história da humanidade. Worlds in Collision, de Immanuel 
          Velikovsky, desafia as fronteiras da ciência e da história com teorias 
          revolucionárias sobre o impacto de eventos astronômicos em nosso planeta. 
          Prepare-se para questionar o que você sabia sobre o passado!</p>
      </article>
      { <Image className='home-image' src="/img/livro.jpg" alt="Calculo." width={300} height={300}/>}
    </div>
  )
}
