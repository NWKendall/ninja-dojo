import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) throw Error("Could not access resource.");
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

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
