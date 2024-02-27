import "./Tarjetas.css";
import imagenes from "./imagenes"

export const Tarjetas = () => {
   
  return (
    <>
        <div className="container-tarjeta">
          <div className="container-tarjeta__contenido">
            <figure>
              <img src={imagenes.img1} alt="" />
            </figure>
            <div>
              <p>Capuccino</p>
              <span>0 Usd</span>
            </div>
            <div>
              <p>4.7</p>
            </div>
          </div>
        </div>
    </>
  )
}