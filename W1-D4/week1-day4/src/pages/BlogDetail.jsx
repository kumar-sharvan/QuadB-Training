import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();

  return (
    <div className="container my-5">
      <h2>Blog Post #{id}</h2>
      <p>
        This is the detailed content for blog post {id}. You can enhance this by
        fetching actual data later.
      </p>
    </div>
  );
}

export default BlogDetail;
