import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 5;

function PostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filtered and paginated data
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(1); // reset page when filtering
        }}
        style={{ marginBottom: "1rem", padding: "4px" }}
      />

      <ul>
        {paginatedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList;
