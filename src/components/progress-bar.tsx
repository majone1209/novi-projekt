import { useState } from "react";

type ProgressbarProps = {
  progress: number;
};

const Progressbar = ({ progress }: ProgressbarProps) => {
  const [plus, setPlus] = useState();
  const [minus, setMinus] = useState();

  const handleProgress = () => {
    if (progress < 0) {
      return "0%";
    } else if (progress > 100) {
      return "100%";
    }
    return progress + "%";
  };
  return (
    <div>
      <div className="progressbar">
        <div
          id="bar"
          className="progressbar__bar"
          style={{ width: handleProgress() }}
        ></div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default Progressbar;
