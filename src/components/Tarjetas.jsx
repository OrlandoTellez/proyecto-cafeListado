import { useFetch } from "./useFetch"
import "./Tarjetas.css"

export const Tarjetas = () => {
  const {data} = useFetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")

  return (
    <>
        <div className="container">
          {data?.map((item) => (
            <div key={item.id} className="container-card">
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <div className="container-text">
                <p>{item.name}</p>
                <span>{item.price}</span>
              </div>
              <div className="container-rating">
                <p>${item.rating} <span className="vote">({item.votes} votes)</span> </p>
              </div>
            </div>
          ))} 
        </div>
    </>
  )
}
