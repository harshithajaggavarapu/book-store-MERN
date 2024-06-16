import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BackButton = ({ dest = "/" }) => {
  return (
    <div>
      <Link to={dest}>
        <button className="p-2 m-2 border  border-black bg-red-800 rounded-md">
          Home
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
