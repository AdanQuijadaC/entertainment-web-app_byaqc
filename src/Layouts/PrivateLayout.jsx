import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/UseGlobalContext";
import { useEffect, useState } from "react";

function PrivateLayout() {
  const { user } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // loading
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        navigate("/");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [loading]);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <>
        <div className="h-screen bg-custom_dark_blue flex justify-center items-center">
          <div className="animate-bounce text-white">Loading...</div>
        </div>
        ;
      </>
    );
  }

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}
export default PrivateLayout;
