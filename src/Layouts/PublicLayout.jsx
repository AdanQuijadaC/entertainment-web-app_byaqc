import { UseGlobalContextProvider } from "../contexts/UseGlobalContext";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <UseGlobalContextProvider>
        <Outlet></Outlet>
      </UseGlobalContextProvider>
    </>
  );
}
export default PublicLayout;
