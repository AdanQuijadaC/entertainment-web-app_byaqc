import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="min-h-screen bg-custom_dark_blue flex justify-center items-center">
        {/* text help */}
        <div className="flex gap-2">
          <p className="text-white">Page Not Found - Error 404</p>
          <Link className="text-custom_red hover:text-custom_red/80" to={"../home"}>
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}
export default PageNotFound;
