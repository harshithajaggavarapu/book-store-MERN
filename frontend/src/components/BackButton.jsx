import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BackButton = ({ dest = "/" }) => {
  return (
    <div>
      <Link to={dest}>
        <button className="p-2 m-2 border border-black bg-sky-500 rounded-md">
          Back
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
