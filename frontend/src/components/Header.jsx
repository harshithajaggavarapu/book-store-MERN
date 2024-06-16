import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BackButton from "./BackButton";
const Header = ({ home }) => {
  return (
    <div>
      <div className="flex justify-between bg-black bg-opacity-80">
        <h1 className="font-semibold text-xl p-2 m-2 text-white">Books List</h1>
        {home ? (
          <Link to={"/books/create"}>
            <button className="border p-2 mr-5 m-2 border-black bg-red-800 rounded-md">
              Add Book
            </button>
          </Link>
        ) : (
          <BackButton dest={"/"} />
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  home: PropTypes.bool.isRequired,
};
export default Header;
