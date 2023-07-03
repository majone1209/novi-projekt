import { AnimalType } from "./animals";
import imgDiet from "./../../assets/diet.png";
import imgClass from "./../../assets/class.png";
import imgHabitat from "./../../assets/habitat.png";
import Button from "../../components/button";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat, id } = animal;

  return (
    <div className="card">
      <img
        className="card__header__img"
        width={"100%"}
        src={`http://source.unsplash.com/random/500x500/?${animal.name.replace(
          " ",
          "-"
        )}`}
        alt="image animal"
      />
      <div>
        <div className="card__title">{name}</div>
        <div className="card__subtitle">{species}</div>
      </div>
      <div className="card__row">
        <img src={imgClass} alt="class animal" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="diet animal" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="habitat animal" />
        <span>{habitat}</span>
      </div>
      <Button text="Delete" color="red" onClick={() => onDelete(id)} />
    </div>
  );
};

export default AnimalCard;
