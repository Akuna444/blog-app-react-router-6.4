import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
