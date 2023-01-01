import classes from "./NewPostForm.module.css";
import { Form } from "react-router-dom";

function NewPostForm({ onCancel, onSubmit, submitting }) {
  return (
    <Form className={classes.form} method="post" action="/blog/new">
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          required
          minLength={10}
          rows={5}
        ></textarea>
      </fieldset>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Cancel
      </button>
      <button disabled={submitting}>
        {submitting ? "Submitting..." : "Create Post"}
      </button>
    </Form>
  );
}

export default NewPostForm;
