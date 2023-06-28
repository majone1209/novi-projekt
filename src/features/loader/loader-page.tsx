import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import { useState } from "react";

const LoaderPage = () => {
  const [loaderOpen, setLoaderOpen] = useState<Boolean>(false);
  const handleLoader = () => {
    setLoaderOpen(!loaderOpen);
    setTimeout(() => {
      setLoaderOpen(false);
    }, 300);
  };
  return (
    <Container>
      <h1>Loader</h1>
      <Devider />
      <Button onClick={() => handleLoader()} text="Open loader" />
      {loaderOpen ? (
        <div>
          <Devider />
          <Loader isActive={true} />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default LoaderPage;
