import { useFetch } from "./useFetch"
import { useState, useEffect } from "react";
import "./Tarjetas.css"

export const Tarjetas = () => {
  const {data, loading} = useFetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === 'available') {
      const availableProducts = data.filter((product) => product.available);
      setFilteredData(availableProducts);
    } else if (filterValue === 'all') {
      setFilteredData(data);
    }
  };

  if(loading){
    return <span>Cargando...</span>
  }
  return (
    <>
        <div className="container-every">
          <div  className="container-filters">
            <button value="all" onClick={() => handleFilter("all")}>
              All Products
            </button>
            <button className="avalaible" value="available" onClick={() => handleFilter("available")}>
              Avalaible Now
            </button>
            
          </div>
          <div className="container">
            {filteredData?.map((item) => (
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