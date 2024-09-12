import React from "react";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="container-fluid bg-slate-900 dark:bg-slate-800 px-3 lg:px-[18rem] mt-24">
      <div className="container mx-auto relative">
        <div className="container mx-auto absolute top-[-120px] left-0 my-10 overflow-hidden bg-white dark:drop-shadow-[0_10px_10px_rgba(2555,255,255,0.25)] drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] rounded-xl dark:bg-slate-900 ">
          <div className="hidden lg:inline-block  absolute left-[-20px] top-[-5px] w-full z-10">
            <div className="flex justify-between items-center relative">
              <FiMail
                className="rotate-[-45deg]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
              <BsPencil
                className="top-[-50px]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
            </div>
          </div>

          <div className="lg:hidden absolute rotate-[25deg] md:rotate-[15deg] top-12 right-0 md:top-7 md:left-0 w-full -z-10">
            <div className="flex justify-between items-center ">
              <FiMail
                className="rotate-[-50deg] text-gray-100 dark:text-slate-700		"
                size={"9rem"}
              />
              <BsPencil
                size={"9rem"}
                className="rotate-[-20deg] text-gray-100 dark:text-slate-700		"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between pb-9 pt-52 px-3 lg:pt-36 mb-3 lg:px-2">
          <div className="basis-4/12 mb-5">
            <div className="mb-4">
              <div className="flex w-full h-full gap-x-3.5">
                <img
                  src="/images/house.png"
                  className={`inline-block w-[45px] h-[45px]`}
                  alt="home icon"
                />
                <img
                  src="/images/home-icon-white.svg"
                  className={`inline-block dark:hidden h-[53px]`}
                  alt="home icon text"
                />
              </div>
            </div>
            <p className="text-gray-300">Realitní služby na míru s více než 30 lety zkušeností - vždy pro vás, 24/7.</p>
          </div>

          <div className="basis-3/12 fs-[17px] mb-3">
            <p className="text-white mb-3 text-md font-semibold">
              Kontaktní údaje
            </p>
            <div>
              <div className="mb-3 flex justify-start item-center">
                <Icon icon="uil:phone" className="text-[#16a34a] text-2xl" />
                <p className="text-gray-300 mb-3 ml-5">
                  jankovych.daria@seznam.cz
                </p>
              </div>
              <div className="mb-3 flex justify-start item-center">
                <Icon icon="uil:envelope" className="text-[#16a34a] text-2xl" />
                <p className="text-gray-300 mb-3 ml-5">+420 725 814 999</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-3 ">
            <span className="text-gray-300 flex justify-center items-center">
              <AiOutlineCopyright className="lg:mr-2" />
              <span>2024 Daria Jankových</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
