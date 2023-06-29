type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color = "green", ...props }: ButtonProps) => {
  return (
    <button className={`btn btn--${color}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
