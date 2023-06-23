type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color = "green" }: ButtonProps) => {
  return <button className={`btn btn--${color}`}>{text}</button>;
};

export default Button;
