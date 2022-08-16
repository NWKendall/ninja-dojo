import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error"> {error} </div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} listTitle="All Blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((b) => b.author === "Mario")}
          listTitle="Mario's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
