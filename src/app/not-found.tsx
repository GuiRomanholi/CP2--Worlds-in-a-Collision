import Image from "next/image";
import "../styles/globals.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
        <h1 className="notfound-title">404 - NotFound</h1>
        <h2 className="notfound-subtitle">This page could not be found.</h2>
        
        { <Image className="notfound-image"  src="/img/img-404.jpg" alt="Página de erro." width={400} height={400}/>}
    </div>
  )
}