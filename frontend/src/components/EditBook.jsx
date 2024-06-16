import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import useFetchBookDataEdit from "../hooks/useFetchBookDataEdit";
import useEditDetails from "../hooks/useEditDetails";
import { useEffect, useState } from "react";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const { id } = useParams();
  const {
    title: titleFetched,
    author: authorFetched,
    publishYear: publishYearFetched,
    loading: fetchLoading,
  } = useFetchBookDataEdit(id);
  useEffect(() => {
    if (!fetchLoading) {
      setTitle(titleFetched);
      setAuthor(authorFetched);
      setPublishYear(publishYearFetched);
    }
  }, [titleFetched, authorFetched, publishYearFetched, fetchLoading]);
  const { editDetails } = useEditDetails();
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };
    await editDetails(data, id);
  };
  return (
    <div className="">
      <Header home={false} />
      {!fetchLoading ? (
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
