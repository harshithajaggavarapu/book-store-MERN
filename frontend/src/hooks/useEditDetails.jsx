import axios from "axios";
import { useNavigate } from "react-router-dom";

const useEditDetails = () => {
  const navigate = useNavigate();
  const editDetails = async (data, id) => {
    try {
      const response = await axios.put(
        "http://localhost:5555/books/" + id,
        data
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error in adding new book. check console");
    }
  };

  return { editDetails };
};

export default useEditDetails;
