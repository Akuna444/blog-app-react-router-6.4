import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";
import { redirect } from "react-router-dom";

function NewPostPage() {
  return (
    <>
      <NewPostForm onCancel={cancelHandler} />
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };

  try {
    savePost(post);
  } catch (err) {
    throw err;
  }

  return redirect("/blog");
}
export default NewPostPage;
