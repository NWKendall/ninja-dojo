import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Going to", body: "body 1", author: "NWK", id: 1 },
    { title: "get a job", body: "body 2", author: "GK", id: 2 },
    { title: "doing web dev", body: "body 3", author: "NWK", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} listTitle="Blogs" />
      <BlogList
        blogs={blogs.filter((b) => b.author === "NWK")}
        listTitle="NWK Blogs"
      />
    </div>
  );
};

export default Home;
