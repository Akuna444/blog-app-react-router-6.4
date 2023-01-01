import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostLoader } from "./pages/BlogPosts";
import NewPostPage, { action, action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as postDetailLoader } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
        />
      </Route>
      <Route path="/blog/new" action={action} element={<NewPostPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
