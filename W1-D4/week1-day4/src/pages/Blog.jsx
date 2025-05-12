import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "First Blog Post",
    description: "Intro to our blog content.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    description: "Deep dive into tech topics.",
  },
];

function Blog() {
  return (
    <div className="container my-5">
      <h2>Blog Posts</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
