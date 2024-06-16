import { useNavigate } from "react-router-dom";
import axios from "axios";
const useAddBook = () => {
  const navigate = useNavigate();
  const submitBook = async (data) => {
    try {
      const response = await axios.post("http://localhost:5555/books/", data);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error in adding new book. check console");
    }
  };
  return { submitBook };
};

export default useAddBook;
