import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BeerPage = () => {
  const [beers, setBeers] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      setBeers(response.data[0]);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <h3>{beers.name}</h3>
          <p>{beers.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default BeerPage;
