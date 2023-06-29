import { useState, useEffect } from "react";
import Container from "../../components/container";
import AnimalCard from "./animalCard";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Devider from "../../components/devider";
import FolatingButton from "../../components/folating-button";
import Select from "../../components/select";
import { OptionType } from "../select-page/select-page";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

const noOfItems = 20;
const rppOptions: OptionType[] = [
  {
    label: "4 životinje",
    value: "4",
  },
  {
    label: "8 životinje",
    value: "8",
  },
  {
    label: "12 životinje",
    value: "12",
  },
];

const Animals = () => {
  const [animalData, setAnimalData] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page (limit koliko itema vidimo od jednom)
  const [rpp, setRpp] = useState<number>(8);

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
    const numberOfPages = Math.ceil(noOfItems / rpp);
    if (page > numberOfPages) {
      setPage(numberOfPages);
    } else {
      getAnimalData();
    }
  }, [page, rpp]);

  return (
    <Container>
      <Loader isActive={loading} />
      <div className="animals__header">
        <h1 className="animals__title">Animals</h1>
        <Select
          options={rppOptions}
          onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
          defaultValue={rppOptions[1]}
        />
      </div>
      <Devider />
      <div className="grid grid--primary type--san-serif">
        {animalData.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={Math.ceil(noOfItems / rpp)}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FolatingButton />
    </Container>
  );
};

export default Animals;
