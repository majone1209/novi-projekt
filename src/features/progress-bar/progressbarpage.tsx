import Container from "../../components/container";
import Devider from "../../components/devider";
import Progressbar from "../../components/progress-bar";

const ProgressbarPage = () => {
  return (
    <Container>
      <h1>Progress bar</h1>
      <Progressbar progress={50} />
      <p className="text">Almost there</p>
      <Devider />
    </Container>
  );
};

export default ProgressbarPage;
