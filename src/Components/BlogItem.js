import { Link } from "react-router-dom";

const BlogItem = ({ blog: b }) => {
  return (
    <div className="blog-preview" key={b.id}>
      <Link to={`/blogs/${b.id}`}>
        <h2>{b.title}</h2>
        <p>Written by {b.author}</p>
      </Link>
    </div>
  );
};

export default BlogItem;
