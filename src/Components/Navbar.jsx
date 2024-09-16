import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { addTheme } from "../services/themeSlice";

const Navbar = () => {
  const [showAni, setShowAni] = useState();
  const [uparrow, setUparrow] = useState();

  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(addTheme({ theme: theme }));
  }, [theme]);

  const changeAni = () => {
    const Theme = JSON.parse(Cookies.get("theme"));
    if (Theme.theme == "light") {
      setShowAni(true);
    } else if (Theme.theme == "dark") {
      setShowAni(false);
    }
  };

  const changeMood = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    changeAni();
  };

  const [color, setColor] = useState(false);
  const colorHandler = () => {
    if (window.pageYOffset >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrollY > 1020) {
      setUparrow(true);
    } else {
      setUparrow(false);
    }
  };
  window.addEventListener("scroll", colorHandler);

  return (
    <div>
      <div className="container-fluid h-fit" id="mystart">
        <div
          className={` ${
            color
              ? "container-fluid w-full myGlassBg dark:bg-slate-900 fixed top-0  h-[70px] z-50 nav_color"
              : "container-fluid w-full myGlassBg dark:bg-[#0F262E] fixed top-0  h-[70px] z-50"
          }`}
        >
          <div
            className={`container-2xl lg:mx-auto lg:px-48  py-4 flex justify-between items-center `}
          >
            <div className="ml-4">
              <Link to={"/"}>
                <div className="flex w-full h-full gap-x-3.5">
                  <img
                    src="/images/house.png"
                    className={`inline-block w-[45px] h-[45px]`}
                    alt="home icon"
                  />
                  <img
                    src="/images/home-icon.svg"
                    className={`inline-block dark:hidden h-[53px]`}
                    alt="home icon text"
                  />
                  <img
                    src="/images/home-icon-white.svg"
                    height="24"
                    className={`hidden dark:inline-block h-[53px]`}
                    alt="home icon text"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-14 h-8 overflow-hidden fixed top-[40%] left-0 z-50  flex flex-col justify-center items-center bg-slate-900 dark:bg-white rounded-2xl rotate-90">
          <div className="w-14 h-7 flex justify-center items-center	relative">
            <button
              onClick={changeMood}
              className={` ${
                showAni == true ? "myDarkBtnMoveUp" : "myDarkBtnMoveDown"
              } absolute top-0 left-0 w-7 h-7 rounded-full z-50 dark:bg-slate-900 bg-white `}
            ></button>
            <p
              onClick={changeMood}
              className="w-7 h-7 p-1 border-0 text-yellow-500 "
            >
              <BsMoon size={"1.3rem"} />
            </p>
            <p
              onClick={changeMood}
              className="w-7 h-7 p-1 border-0 text-yellow-500"
            >
              <BsFillSunFill size={"1.3rem"} />
            </p>
          </div>
        </div>

        <div className={`${uparrow ? "block" : "hidden"}`}>
          <a href="#mystart" className="duration-[1500ms]">
            <button className="fixed right-3 bottom-[5%] w-10 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#16a34a] hover:bg-[#138a3f] rounded-full z-50">
              <BiUpArrowAlt size={"1.5rem"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
