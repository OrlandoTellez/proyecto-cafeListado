import { useFetch } from "./useFetch"
import "./Tarjetas.css"


export const Tarjetas = () => {
  const {data, loading} = useFetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");

  if(loading){
    return <span>Cargando...</span>
  }
  return (
    <>
        <div className="container-every">
          <div class="botones">
              <button class="boton"> 
                All Products
              </button>
              <button class="boton">
                Available Now
              </button>
          </div>

          <div className="container">
            {data?.map((item) => (
              <div key={item.id} className="container-card">
                <figure>
                  <img src={item.image} alt={item.name} />
                  {
                    item.popular === true ? (
                      <span className="popular">Popular</span>
                    ) : null
                  }
                </figure>
                <div className="container-text">
                  <p>{item.name}</p>
                  <span>{item.price}</span>
                </div>
                <div className="container-rating">
                  <p>${item.rating} <span className="vote">({item.votes} votes)</span></p>
                  {item.available === false ? (
                    <span className="agotado">Sold out</span>
                  ) : null}
                </div>
              </div>
            ))} 
          </div>
        </div>
    </>
  )
}
