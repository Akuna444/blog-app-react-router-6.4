import { useLoaderData, useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const post = useLoaderData();
  return <>{<BlogPost title={post.title} text={post.body} />}</>;
}

export function loader({ params }) {
  const { id } = params;
  return getPost(id);
}
export default PostDetailPage;
