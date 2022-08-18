import { useParams, useNavigate } from "react-router-dom";
import { blogEndPoint } from "./urls";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(blogEndPoint + id);
  let navigate = useNavigate()
  
  const handleDelete = (async () =>{
    await fetch(blogEndPoint + id, {method: "DELETE"});
    navigate(-1);
})

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>Written by {blog.author} </h4>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button> 
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
