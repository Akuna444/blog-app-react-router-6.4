import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  return (
    <>
      <h1>Our Blog Posts</h1>
      {<Posts blogPosts={posts} />}
    </>
  );
}

export function loader() {
  return getPosts();
}

export default BlogPostsPage;
