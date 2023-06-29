import { useState } from "react";

type ProgressbarProps = {
  progress: number;
  onFinish?: () => void;
};

const Progressbar = ({ progress, onFinish }: ProgressbarProps) => {
  const handleProgress = (progress: number) => {
    if (progress === 100) {
      onFinish && onFinish();
    }
    if (progress > 100) {
      return "100%";
    } else if (progress < 0) {
      return "0%";
    }
    return `${progress}%`;
  };
  return (
    <div>
      <div className={`progressbar ${
        progress === 100 ? "progressbar--finished" : ""
      }`}>
        <div
          className="progressbar__bar"
          style={{ width: handleProgress(progress) }}
        ></div>
        
      </div>
    </div>
  );
};

export default Progressbar;
