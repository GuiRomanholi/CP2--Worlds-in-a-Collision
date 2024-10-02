import React from 'react'
import Image from "next/image";

export default function Calculo() {
  return (
    <div>
        <h1>Calculo</h1>
        <article>
          <p>O cálculo do efeito gravitacional entre a Terra e Vênus durante uma aproximação hipotética (a 40 milhões de km) resultaria em uma força gravitacional de aproximadamente </p>
          <p>A ilustração acima mostra uma representação simplificada das órbitas da Terra e de Vênus, com Vênus em uma posição de aproximação próxima. A imagem destaca a diferença entre as órbitas dos dois planetas e sua possível proximidade nesse cenário.</p>
        </article>
        { <Image className="img_calculo-image"  src="/img/img_calculo.png" alt="Calculo." width={400} height={400}/>}
    </div>
  )
}
