import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// API : https://api.punkapi.com/v2/beers

const Home = () => {
  const [beers, setBeers] = useState();
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <>
      {isLoaded ? (
        <div>
          <h1>Live coding UseEffect / React Router</h1>
          {beers.map((beer) => {
            return (
              <div key={beer.id}>
                <Link to={`/beers/${beer.id}`}>
                  <h3>{beer.name}</h3>
                </Link>
              </div>
            );
          })}
          <button onClick={() => setCount(count + 1)}>Get a random beer</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
