import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import { useState } from "react";

const LoaderPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Container>
      <h1>Loader</h1>
      <Devider />
      <Loader isActive={loading} />
      <Button onClick={() => handleLoader()} text="Open loader" />
    </Container>
  );
};
export default LoaderPage;

// Loader komponentu kontroliramo kroz "isActive" prop, a izgled loadera možemo mjenjati preko "text" propa. Ako u text prop prosljedimo string, on će se prikazati kao loader, u slucaju da ne prosljedimo ništa, uoader će se učitati defaultni izgled spinnera. Kako bi upalili i isprobali spinner, stisni button ispod.
