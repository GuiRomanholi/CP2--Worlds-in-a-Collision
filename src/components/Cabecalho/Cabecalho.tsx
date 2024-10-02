import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <div>
        <h1>Cabecalho</h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cronologia">Cronologia</Link></li>
            <li><Link href="/forca">Força</Link></li>
            <li><Link href="/velocidade">Velocidade</Link></li>
            <li><Link href="/calculo">Calculo</Link></li>
        </ul>
    </div>
  )
}
