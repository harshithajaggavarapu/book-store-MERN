import axios from "axios";
import { useEffect, useState } from "react";
const useFetchBookDataEdit = (id) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const fetchData = async (id) => {
    try {
      const data = await axios.get("http://localhost:5555/books/" + id);
      setTitle(data?.data?.title);
      setAuthor(data?.data?.author);
      setPublishYear(data?.data?.publishYear);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return { title, author, publishYear, loading };
};

export default useFetchBookDataEdit;
