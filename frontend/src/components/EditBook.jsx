import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Loader from "./Loader";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchData = async () => {
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
    setLoading(true);
    fetchData();
  }, []);
  const handleEditSubmit = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      const response = await axios.put(
        "http://localhost:5555/books/" + id,
        data
      );
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error in adding new book. check console");
      setLoading(false);
    }
  };
  return (
    <div className="">
      <BackButton dest={"/"} />
      {!loading ? (
        <div>
          <div className="border border-sky-700 border-solid w-[30%] m-[10%] py-[5%] mx-[30%]">
            <form className="mr-[2%]">
              <div className="w-full p-[2%]">
                {/* <div className="px-2 mx-2">Title</div> */}
                <input
                  className="border border-sky-700 rounded-md w-full p-2 m-2"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  className="border border-sky-700 rounded-md p-2 m-2 w-full"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                  className="border border-sky-700 rounded-md p-2 m-2 w-full"
                  type="text"
                  value={publishYear}
                  placeholder="Published Year"
                  onChange={(e) => setPublishYear(e.target.value)}
                />
                <button
                  className="border  bg-green-600 rounded-md w-1/2 mx-[25%] py-2"
                  onClick={handleEditSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EditBook;
