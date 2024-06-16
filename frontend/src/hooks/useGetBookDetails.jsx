import axios from "axios";
import { useState, useEffect } from "react";
const useGetBookDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);
  const getBookDetails = async () => {
    try {
      const data = await axios.get("http://localhost:5555/books/" + id);
      setBookDetails(data?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getBookDetails();
  }, [id]);

  return { loading, bookDetails, error };
};

export default useGetBookDetails;
