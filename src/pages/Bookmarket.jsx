import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import image_avatar from "../assets/image-avatar.png";
import { useGlobalContext } from "../contexts/UseGlobalContext";
import { useState } from "react";
import { logout } from "../config/firebase";

function Bookmarket() {
  const { data, setData, user } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    if (!e.target.closest(".mobile_modal")) {
      setIsOpen(!isOpen);
    }
  };
  const navigate = useNavigate();
  const bookmarked = (e, title) => {
    const itemIndex = data.findIndex((item) => item.title === title);

    if (data[itemIndex].isBookmarked) {
      data[itemIndex].isBookmarked = false;
    } else {
      data[itemIndex].isBookmarked = true;
    }

    const newData = data.filter((item, index) => {
      return item;
    });

    setData(newData);
    localStorage.setItem(user.uid, JSON.stringify(newData));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`../bookmarket/search?title=${search.trim()}`);
  };
  return (
    <>
      <Helmet>
        <title>Bookmarket - Entertainment Web App</title>
        <meta name="description" content="Bookmarket"></meta>
      </Helmet>
      <div
        onClick={(e) => {
          if (!e.target.closest(".mobile_modal")) {
            if (isOpen) {
              setIsOpen(false);
            }
          }
        }}
        className="min-h-screen bg-custom_dark_blue lg:flex lg:w-full lg:justify-center"
      >
        <div className="max-w-[1440px] mx-auto sm:pt-4 lg:flex lg:py-8 lg:container">
          <header className="bg-custom_semi_dark_blue sm:container sm:mx-auto  sm:rounded-lg lg:h-max lg:w-max">
            <nav className="container mx-auto p-4 flex justify-between items-center lg:flex-col lg:h-[calc(100vh-5rem)]">
              {/* logo */}
              <Link className="lg:mt-3" to={"../"}>
                <figure className="">
                  <svg
                    width="25"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
                      fill="#FC4747"
                    />
                  </svg>
                </figure>
              </Link>
              {/* nav */}
              <ul className="flex gap-6 items-center lg:flex-col lg:mt-16">
                <li>
                  <Link to={"../"}>
                    <figure>
                      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                          fill="#5A698F"
                        />
                      </svg>
                    </figure>
                  </Link>
                </li>
                <li>
                  <Link to={"../movies"}>
                    <figure>
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                          fill="#5A698F"
                          opacity=".75"
                        />
                      </svg>
                    </figure>
                  </Link>
                </li>
                <li>
                  <Link to={"../tvseries"}>
                    <figure>
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                          fill="#5A698F"
                          opacity=".75"
                        />
                      </svg>
                    </figure>
                  </Link>
                </li>
                <li>
                  <Link to={"../bookmarket"}>
                    <figure>
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 20"
                      >
                        <path
                          d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                          fill="#fff"
                        />
                      </svg>
                    </figure>
                  </Link>
                </li>
              </ul>
              {/* user avatar */}
              <button
                onClick={(e) => toggleMenu(e)}
                type="button"
                className="bg-white rounded-full p-[1px] md:mt-auto md:relative"
              >
                <figure className="h-[24px] w-[24px]">
                  <img src={image_avatar} alt="" />
                </figure>
                {/* hidden mobile modal */}
                {isOpen && (
                  <div
                    id="mobile_modal"
                    className={`absolute rounded-lg top-24 left-[50%] translate-x-[-50%] max-auto bg-custom_semi_dark_blue w-11/12 text-white md:top-[3rem] md:translate-x-0 md:h-max md:w-[200px] z-40 md:left-[-8.2rem] lg:top-[-4.4rem] lg:left-[3rem]`}
                  >
                    <ul className="flex flex-col mobile_modal md:text-left">
                      <li className="py-4 hover:text-custom_red md:px-2">{user.email}</li>
                      <li
                        onClick={async () => {
                          setIsOpen(!isOpen);

                          try {
                            await logout();
                          } catch (error) {}
                        }}
                        className="py-4 hover:text-custom_red  md:px-2 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </nav>
          </header>
          <main className="lg:container lg:w-full">
            <div className="sm:container mx-auto p-4">
              {/* form */}
              <div>
                <form onSubmit={handleSubmit} className="flex w-full font-light text-white">
                  <div className="w-full flex items-center gap-2">
                    <button type="submit">
                      <figure>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
                            fill="#FFF"
                          />
                        </svg>
                      </figure>
                    </button>
                    <input
                      name="search"
                      value={search}
                      onChange={(e) => handleSearch(e)}
                      className="bg-inherit p-2 outline-none border-b border-transparent w-full focus:border-custom_greyish_blue"
                      type="text"
                      placeholder="Search for bookmarked shows"
                    />
                  </div>
                </form>
              </div>
              {/* bookmarked shows */}
              <h2 className="text-xl text-white py-8">Bookmarked shows</h2>
              <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 smxl:grid-cols-3 md:grid-cols-4">
                {data.length > 0 &&
                  data
                    .filter((item, index) => {
                      return item.isBookmarked === true && item.category === "Movie";
                    })
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 bg-cover bg-center text-white w-full "
                      >
                        <div
                          style={{
                            backgroundImage: `url(${item.thumbnail.regular.large})`,
                          }}
                          className="flex -mt-2 p-2 rounded-lg bg-cover bg-center w-full relative group min-h-[110px] h-[110px] max-h-[280px] sm:min-h-[130px] sm:h-[130px] md:min-h-[160px]"
                        >
                          {/* hidden play button */}
                          <div className="hidden absolute rounded-lg group-hover:flex pointer-events-none top-0 left-0 w-full h-full  justify-center items-center bg-black/40 z-20 ">
                            {/* play */}
                            <button
                              className="flex items-center pointer-events-auto gap-4 p-2 rounded-[28px] bg-white/30 relative z-30"
                              type="button"
                            >
                              <figure>
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                                    fill="#FFF"
                                  />
                                </svg>
                              </figure>
                              <span className="font-medium text-white pr-2 text-[18px]">Play</span>
                            </button>
                          </div>
                          <div className="ml-auto">
                            {/* bookmarket */}
                            <button
                              onClick={(e) => bookmarked(e, item.title)}
                              type="button"
                              className={`h-[32px] w-[32px] rounded-full bg-black/35 flex justify-center items-center relative z-30 ${
                                item.isBookmarked ? "hover:text-black hover:bg-white" : ""
                              } ${!item.isBookmarked ? "hover:bg-white hover:text-black" : ""}`}
                            >
                              <figure>
                                {/* bookmarked empty */}
                                {!item.isBookmarked && (
                                  <div>
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                      />
                                    </svg>
                                  </div>
                                )}
                                {/* bookmarked full */}
                                {item.isBookmarked && (
                                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                )}
                              </figure>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-white/70">
                            {/* year */}
                            <span className="text-[12px]">{item.year}</span>
                            {/* point */}
                            <span className="h-[3px] w-[3px] rounded-full bg-current"></span>
                            <div className="flex items-center gap-2">
                              {/* category */}
                              <figure className="text-white/70">
                                {item.category === "TV Series" && (
                                  <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                                      fill="#FFF"
                                      opacity=".75"
                                    />
                                  </svg>
                                )}
                                {item.category === "Movie" && (
                                  <svg
                                    width="12"
                                    height="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                )}
                              </figure>
                              {/* category */}
                              <span className="text-[12px]">{item.category}</span>
                              {/* point */}
                              <span className="h-[3px] w-[3px] rounded-full bg-current"></span>
                              {/* rating */}
                              <span className="text-[12px]">{item.rating}</span>
                            </div>
                          </div>
                          {/* title */}
                          <h3 className="text-white font-medium">{item.title}</h3>
                        </div>
                      </div>
                    ))}
              </div>
              {/* bookmarked tv series */}
              <h2 className="text-xl text-white py-8">Bookmarked TV Series</h2>
              <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 smxl:grid-cols-3 md:grid-cols-4">
                {data.length > 0 &&
                  data
                    .filter((item, index) => {
                      return item.isBookmarked === true && item.category === "TV Series";
                    })
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 bg-cover bg-center text-white w-full "
                      >
                        <div
                          style={{
                            backgroundImage: `url(${item.thumbnail.regular.large})`,
                          }}
                          className="flex -mt-2 p-2 rounded-lg bg-cover bg-center w-full relative group min-h-[110px] h-[110px] max-h-[280px] sm:min-h-[130px] sm:h-[130px] md:min-h-[160px]"
                        >
                          {/* hidden play button */}
                          <div className="hidden absolute rounded-lg group-hover:flex pointer-events-none top-0 left-0 w-full h-full  justify-center items-center bg-black/40 z-20 ">
                            {/* play */}
                            <button
                              className="flex items-center pointer-events-auto gap-4 p-2 rounded-[28px] bg-white/30 relative z-30"
                              type="button"
                            >
                              <figure>
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                                    fill="#FFF"
                                  />
                                </svg>
                              </figure>
                              <span className="font-medium text-white pr-2 text-[18px]">Play</span>
                            </button>
                          </div>
                          <div className="ml-auto">
                            {/* bookmarket */}
                            <button
                              onClick={(e) => bookmarked(e, item.title)}
                              type="button"
                              className={`h-[32px] w-[32px] rounded-full bg-black/35 flex justify-center items-center relative z-30 ${
                                item.isBookmarked ? "hover:text-black hover:bg-white" : ""
                              } ${!item.isBookmarked ? "hover:bg-white hover:text-black" : ""}`}
                            >
                              <figure>
                                {/* bookmarked empty */}
                                {!item.isBookmarked && (
                                  <div>
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                      />
                                    </svg>
                                  </div>
                                )}
                                {/* bookmarked full */}
                                {item.isBookmarked && (
                                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                )}
                              </figure>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-white/70">
                            {/* year */}
                            <span className="text-[12px]">{item.year}</span>
                            {/* point */}
                            <span className="h-[3px] w-[3px] rounded-full bg-current"></span>
                            <div className="flex items-center gap-2">
                              {/* category */}
                              <figure className="text-white/70">
                                {item.category === "TV Series" && (
                                  <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                                      fill="#FFF"
                                      opacity=".75"
                                    />
                                  </svg>
                                )}
                                {item.category === "Movie" && (
                                  <svg
                                    width="12"
                                    height="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                )}
                              </figure>
                              {/* category */}
                              <span className="text-[12px]">{item.category}</span>
                              {/* point */}
                              <span className="h-[3px] w-[3px] rounded-full bg-current"></span>
                              {/* rating */}
                              <span className="text-[12px]">{item.rating}</span>
                            </div>
                          </div>
                          {/* title */}
                          <h3 className="text-white font-medium">{item.title}</h3>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default Bookmarket;
