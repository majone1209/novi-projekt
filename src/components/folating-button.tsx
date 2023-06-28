import { ButtonHTMLAttributes } from "react";
import IconPlus from "../assets/plus";

type FolatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FolatingButton = ({ ...props }: FolatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <IconPlus />
    </button>
  );
};

export default FolatingButton;
