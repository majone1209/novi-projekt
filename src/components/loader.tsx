type LoaderProps = {
  isActive: boolean;
};

const Loader = ({ isActive }: LoaderProps) => {
  return <div>{isActive ? <div className="loader"></div> : ""}</div>;
};

export default Loader;
