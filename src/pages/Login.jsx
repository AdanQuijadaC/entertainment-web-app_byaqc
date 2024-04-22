import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/UseGlobalContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { login } from "../config/firebase";

function Login() {
  const { user, setUser } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorCode, setErrorCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    login({ email: form.email.trim(), password: form.password.trim() })
      .then((user) => {})
      .catch((error) => {
        setErrorCode(error.code);
        setTimeout(() => {
          setErrorCode("");
        }, 3000);
      });
  };

  useEffect(() => {
    if (typeof user === "object") {
      navigate("../home");
    } else {
      setUser(false);
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Login - Entertainment Web App</title>
        <meta name="description" content="Login"></meta>
      </Helmet>
      <div className="flex h-screen items-center  bg-custom_dark_blue">
        {/* logo */}
        <Link to={"/"} title="logo">
          <figure className="absolute top-28 left-[50%] translate-x-[-50%]">
            <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
                fill="#FC4747"
              />
            </svg>
          </figure>
        </Link>

        <form
          className="bg-custom_semi_dark_blue p-8 rounded-[20px] text-white font-light h-max container mx-auto w-11/12 max-w-[400px]"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl">Login</h1>
            <div className="relative">
              <input
                className={`bg-inherit p-2 outline-none border-b border-custom_greyish_blue w-full focus:border-white ${
                  form.email.trim() === "" &&
                  submitted &&
                  "border-custom_red focus:border-custom_red"
                }`}
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={(e) => handleFormInput(e)}
                value={form.email}
              />
              {/* show error */}
              {form.email.trim() === "" && submitted && (
                <div className="absolute right-2 top-2  text-custom_red">Can't be empty</div>
              )}
            </div>
            <div className="relative">
              <input
                className={`bg-inherit p-2 outline-none border-b border-custom_greyish_blue w-full focus:border-white ${
                  form.password.trim() === "" &&
                  submitted &&
                  "border-custom_red focus:border-custom_red"
                }`}
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleFormInput(e)}
                value={form.password}
              />
              {/* show error */}
              {form.password.trim() === "" && submitted && (
                <div className="absolute right-2 top-2  text-custom_red">Can't be empty</div>
              )}
            </div>
            <div className="relative">
              <button
                type="submit"
                className="bg-custom_red w-full py-3 rounded-md hover:bg-white hover:text-custom_dark_blue"
              >
                Login to your account
              </button>
              {errorCode !== "" && (
                <div className="absolute top-[calc(100%+8px)] left-[50%] translate-x-[-50%] text-custom_red text-sm animate-pulse">
                  {errorCode.split("/").slice(1)}
                </div>
              )}
            </div>
            <div className="flex justify-center gap-2">
              <p>Don't have an account?</p>
              <Link className="text-custom_red hover:text-custom_red/80" to={"../signup"}>
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
