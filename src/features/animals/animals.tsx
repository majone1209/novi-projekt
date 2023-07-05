import { useState, useEffect } from "react";
import Container from "../../components/container";
import AnimalCard from "./animalCard";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Devider from "../../components/devider";
import FolatingButton from "../../components/folating-button";
import { OptionType } from "../select-page/select-page";
import { dataHeaders } from "./animal-create";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select";
import Modal from "../../components/modal";

export type AnimalType = {
  id: string;
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

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
//rows per page (limit koliko itema vidimo jednom)
//const rpp = 8;
//const noOfItems = 20;
//const numberOfPages = Math.ceil(noOfItems / rpp);

const Animals = () => {
  const [animalData, setAnimalData] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page (limit koliko itema vidimo od jednom)
  const [rpp, setRpp] = useState<number>(8);
  const [noOfItems, setNoOfItems] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  const navigate = useNavigate();

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

  const getAnimalsCount = () => {
    fetch(`http://localhost:3000/animals`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setNoOfItems(data.length);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
      headers: dataHeaders,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        getAnimalData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimalsCount();
  }, []);

  useEffect(() => {
    if (noOfItems > 0) {
      const numberOfPages = Math.ceil(noOfItems / rpp);
      if (page > numberOfPages) {
        setPage(numberOfPages);
      } else {
        getAnimalData();
      }
    }
  }, [page, rpp, noOfItems]);

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
          return (
            <AnimalCard
            onDelete={(id: string) => setModalOpen(id)}
              key={animal.name}
              animal={animal}
            />
          );
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={Math.ceil(noOfItems / rpp)}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FolatingButton onClick={() => navigate("/animals/new")} />
      <Modal
      size="sm"
        isOpen={modalOpen ? true : false}
        onClose={() => setModalOpen(null)}
        title="Are you sure you want to delete?"
        onSuccess={() => {
          if (modalOpen) {
            handleDelete(modalOpen);
            setModalOpen(null);
          }
        }}
      >It will be gone and It's not coming back.
      </Modal>
    </Container>
  );
};

export default Animals;
