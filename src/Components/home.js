import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { blogEndPoint } from "./urls";

const Home = () => {
  const { data, isLoading, error } = useFetch(blogEndPoint);

  return (
    <div className="home">
      {error && <div className="error"> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={data} listTitle="All Blogs" />}
      {data && (
        <BlogList
          blogs={data.filter((b) => b.author === "Mario")}
          listTitle="Mario's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
