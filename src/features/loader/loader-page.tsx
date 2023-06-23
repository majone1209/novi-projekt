import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import { useState } from "react";

const LoaderPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoader = () => {
    setLoaderOpen(!loaderOpen);
  };

  return (
    <Container>
      <h3>Loading...</h3>
      <Loader isActive={loading} />
      <Button text={"Open"} onClick={() => setLoading} />
      {loading ? <div></div> : <></>}
    </Container>
  );
};

export default LoaderPage;
