import TrashIcon from "../assets/trashIcon";

type ButtonProps = {
    text: string;
    color?: "red" | "green" | "blue";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonDelete = ({ text, color = "green", ...props }: ButtonProps) => {
    return (
        <button className={`btn btn--${color}`} {...props}>
          <TrashIcon/>{text}
    </button>
    )

}

export default ButtonDelete;