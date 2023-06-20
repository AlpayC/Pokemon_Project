import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = () => {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
};

export default BackBtn;
