import { useState } from "react";
import axios from "axios";
const useDeleteBook = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      const response = axios.delete("http://localhost:5555/books/" + id);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    //setTriggering(!triggering);
  };

  return { deleteBook, loading, error };
};

export default useDeleteBook;
