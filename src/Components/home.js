import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Going to", body: "body 1", author: "NWK", id: 1 },
    { title: "get a job", body: "body 2", author: "NWK", id: 2 },
    { title: "doing web dev", body: "body 3", author: "NWK", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <h2>{b.title}</h2>
          <p>Written by: {b.author}</p>
          <p>{b.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
<div className="home"></div>;
