import { ReactNode } from "react";
import IconDownload from "./download";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
};

const Input = ({ placeholder = "", icon, size = "md" }: InputProps) => {
  return (
    <div className="input__wrapper">
      <div className="input__icon--sm input__icon--md">{icon}</div>
      <input
        placeholder={placeholder}
        className={`input ${icon}`}
        type="text"
      />
    </div>
  );
};

export default Input;
