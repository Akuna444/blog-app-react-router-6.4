import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const Error = () => {
  const error = useRouteError();
  return (
    <section>
      <MainNavigation />
      <h1>An Error Has Occured</h1>
      <p>{error.message}</p>
    </section>
  );
};

export default Error;
