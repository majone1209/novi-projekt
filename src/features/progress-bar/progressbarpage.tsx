import Container from "../../components/container";
import Devider from "../../components/devider";
import Button from "../../components/button";
import Progressbar from "../../components/progress-bar";
import { useState } from "react";

const ProgressbarPage = () => {

  const [progressValue, setProgressValue] = useState<number>(20);

  const handleProgressValue = (operation: "+" | "-") => {
    if (progressValue >= 0 && progressValue <= 100) {
      if (operation === "+") {
        setProgressValue(progressValue + 5);
      } else {
        setProgressValue(progressValue - 5);
      }
    }
  };

  return (
    <Container>
      <h1>Progress bar</h1>
      <Progressbar onFinish={() => console.log("progress is finished")}
        progress={progressValue} />
      <p className="text">Almost there</p>
      <Devider />
      <div className="progresspage__btns">
        <Button
          disabled={progressValue === 0 && true}
          onClick={() => handleProgressValue("-")}
          text="minus 5%"
        />
        <Button
          disabled={progressValue === 100 && true}
          onClick={() => handleProgressValue("+")}
          text="plus 5%"
        />
      </div>
    </Container>
  );
};

export default ProgressbarPage;
