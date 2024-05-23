/* eslint-disable no-unused-vars */
import { useState } from "react";
import { LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="w-full shadow-sm shadow-slate-500 p-3 flex items-center justify-between">
      <Link
        to="/"
        className="text-3xl font-semibold p-3 flex items-center cursor-pointer hover:text-green-100"
      >
        Verbatim{" "}
        <img src="/tree-brain.svg" alt="logo" className="w-10 invert " />{" "}
      </Link>

      <div className="gap-2 hidden md:flex ">
        <Link
          to="/"
          className="rounded-[100%] bg-sky-100 hover:bg-yellow-300  p-2  cursor-pointer "
        >
          <img src="/user-svg.svg" alt="user" className="w-6" />
        </Link>

        {navItems.map((item) =>
          item.active ? (
            <Link
              key={item.name}
              to={item.slug}
              className=" rounded-[100%] bg-sky-100 hover:bg-green-300  p-2  cursor-pointer "
            >
              <img src={`${item.slug}.svg`} alt="login" className="w-6" />
            </Link>
          ) : null
        )}
        {authStatus && (
          <>
            <LogoutBtn />
          </>
        )}
      </div>

      <div className="md:hidden">
        {isClicked ? (
          <div className="gap-2 flex flex-col bg-slate-700 p-5">
            <button>
              <img
                src="/cross-svg.svg"
                alt="cross-svg"
                className="w-10  "
                onClick={() => {
                  setIsClicked((prv) => !prv);
                }}
              />
            </button>

            <Link
              to="/"
              className="rounded-[100%] bg-sky-100 hover:bg-yellow-300  p-2  cursor-pointer "
            >
              <img src="/user-svg.svg" alt="user" className="w-6" />
            </Link>

            {navItems.map((item) =>
              item.active ? (
                <Link
                  key={item.name}
                  to={item.slug}
                  className=" rounded-[100%] bg-sky-100 hover:bg-green-300  p-2  cursor-pointer "
                >
                  <img src={`${item.slug}.svg`} alt="login" className="w-6" />
                </Link>
              ) : null
            )}
          </div>
        ) : (
          <button
            onClick={(e) => {
              setIsClicked((prv) => !prv);
            }}
          >
            <img
              src="./hamburger-svg.svg"
              alt="hamburger-menu"
              className="rounded-[100%] bg-sky-100 w-10"
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
