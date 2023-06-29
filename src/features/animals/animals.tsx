import { useState, useEffect } from "react";
import Container from "../../components/container";
import AnimalCard from "./animalCard";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Devider from "../../components/devider";
import FolatingButton from "../../components/folating-button";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//rows per page (limit koliko itema vidimo jednom)
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(noOfItems / rpp);

const Animals = () => {
  const [animalData, setAnimalData] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimalData = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          setAnimalData(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimalData();
  }, [page]);

  return (
    <Container>
      <Loader isActive={loading} />
      <h1>Animals</h1>
      <Devider />
      <div>Imamo itema: {animalData.length}</div>
      <div className="grid grid--primary type--san-serif">
        {animalData.map((animal) => {
          return (
            <AnimalCard
              onDelete={handleDelete}
              key={animal.name}
              animal={animal}
            />
          );
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={numberOfPages}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FolatingButton />
    </Container>
  );
};

export default Animals;
