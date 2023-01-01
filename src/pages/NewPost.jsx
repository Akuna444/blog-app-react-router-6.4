import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";
import { redirect, useActionData, useNavigation } from "react-router-dom";

function NewPostPage() {
  const cancelHandler = () => {};
  const error = useActionData();
  const navigation = useNavigation();
  return (
    <>
      {error && error.status && <p>{error.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
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
    await savePost(post);
  } catch (err) {
    return err;
  }

  return redirect("/blog");
}
export default NewPostPage;
