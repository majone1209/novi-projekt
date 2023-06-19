import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Input from "../../components/input";

const Home = () => {
  return (
    <Container size="sm">
      <h1>Hello!</h1>
      <Button color="blue" text="Click me" />
      <Devider marginTop="sm" marginBottom="sm" />
      <h1>Naslov</h1>
      <div>neki tekst</div>
      <Input placeholder="First name" />
    </Container>
  );
};

export default Home;
