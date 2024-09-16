import React from "react";
import { useState } from "react";

import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <>
      <div className="container-fluid dark:bg-slate-900">
        <div className="container-fluid lg:h-screen pb-30  bg-[#E7F6ED]  dark:bg-[#13252F]">
          <div className="container-2xl mx-auto flex flex-col lg:flex-row justify-between items-center h-fit md:h-screen mb-10 pt-32 lg:pt-10 bg-[#E7F6ED] dark:bg-[#13252F]">
            <div className="basis-6/12 my-10">
              <div className="px-2">
                <h1 className="text-4xl font-extrabold text-black dark:text-white leading-loose mb-6 text-center lg:text-left">
                  Realitní služby
                  <span className="text-[#16a34a]"> na míru </span> s více než
                  <span className="text-[#16a34a]"> 30 lety zkušeností</span>
                </h1>
                <p className="text-slate-400 mb-8 font-[17px] tracking-wide text-center lg:text-left">
                  Jsem realitní makléř s individuálním přístupem a více než 30
                  lety praxe, připravený poskytnout služby v oblasti
                  nemovitostí podle vašich potřeb - kdykoliv 24/7.
                </p>
              </div>
            </div>
            <div className="basis-5/12 my-10 bg-black">
              <img
                src="/images/placeholder.jpg"
                alt="Daria Jankových picture"
              />
            </div>
          </div>
        </div>

        <div className="md:pb-8">
          <div className="container-2xl mt-16 lg:mt-24 mb-20 dark:bg-slate-900">
            <div className="flex-center-center flex-col">
              <h1 className="sub-header  dark:text-white">KDO JSEM</h1>
              <p className="paragraph">
                Na realitní činnost se specializuji od roku 1993. Jako realitní
                zprostředkovatel se zaměřuji na individuální potřeby klientů a
                nabízím osobní přístup, přičemž pracuji formou přímé práce pro
                klienta a v režimu 24/7.
                <br />
                Za více než 30 let praxe jsem zažila mnoho změn na trhu
                nemovitostí a každé období mě naučilo něco nového. Tyto
                zkušenosti využívám k poskytování realitních služeb a odborných
                rad, přičemž se snažím vždy své služby poskytovat s důrazem na
                osobní potřeby a představy každého mého klienta.
                <br />
                Většina mých klientů za mnou přichází na základě doporučení a
                vrací se díky spokojenosti s výsledkem mé práce.
                <br />
                Činnost realitního zprostředkovatele vykonávám dle podmínek dle
                platného realitního zákona a mám zákonné pojištění odpovědnosti
                realitního zprostředkovatele.
              </p>
              <h1 className="sub-header dark:text-white mt-14">CO DĚLÁM</h1>
              <p className="paragraph">
                Mé služby zahrnují nejen zprostředkování prodeje a nákupu
                nemovitostí, ale také řešení specifických požadavků klienta.
                Nabízím mimo jiné:
                <ul className="text-md text-left font-medium text-amber-500 list-disc mb-7 mt-2">
                  <li className="ms-7">
                    posouzení tržní ceny (pro prodej, dědická řízení apod.)
                  </li>
                  <li className="ms-7">
                    srovnání tržních nabídek v místě a čase
                  </li>
                  <li className="ms-7">
                    zajištění zpracování energetického štítku (PENB)
                  </li>
                  <li className="ms-7">
                    vyhodnocení rizik a výhod nabídky nemovitostí
                  </li>
                  <li className="ms-7">
                    zajištění fotodokumentace a inzerce nemovitostí na míru
                    každé nemovitosti
                  </li>
                  <li className="ms-7">
                    provedení prohlídek a vyhodnocení bonity zájemců
                  </li>
                  <li className="ms-7">
                    zajištění služeb advokáta včetně smluvního zajištění úschovy
                    finančních prostředků
                  </li>
                </ul>
                Doplňkové služby, které poskytuji ve spolupráci s profesionály v
                oboru:
                <ul className="text-md text-left font-medium text-amber-500 list-disc my-2">
                  <li className="ms-7">
                    úklid a vyklizení nemovitostí včetně likvidace odpadu
                  </li>
                  <li className="ms-7">
                    stavební, malířské a jiné nutné práce
                  </li>
                  <li className="ms-7">elektro a technické opravy</li>
                </ul>
              </p>
              <h1 className="sub-header dark:text-white mt-14">JAK TO DĚLÁM</h1>
              <p className="paragraph">
                Realitní činnost pro mne není jen soubor zákonných povinností,
                ale i určité poslání pomáhat mým klientům. Dbám na to, aby byli
                klienti při prodeji či nákupu nemovitosti seznámení se všemi
                informacemi tak, aby se mohli rozhodnout ve svém nejlepším
                zájmu.
                <br />
                Každou spolupráci zahajuji osobním rozhovorem, probereme
                představy klienta a možnosti spolupráce. Moji klienti jsou
                náležitě informováni o průběhu poskytování služeb a mohou se
                mnou kdykoliv svůj případ konzultovat. Každý z nás má jiné
                časové možnosti, a proto se snažím klientům maximálně
                přizpůsobit.
              </p>
            </div>
          </div>
        </div>

        <div className="container-2xl">
          <div className="grid-layout-2">
            <div className="lg:px-8">
              <div className="relative">
                <LuHexagon className="w-32 h-32 text-[#f3faf6] mx-auto dark:text-slate-900 fill-[#f3faf6] dark:fill-[#0F1e2c]" />
                <div className="absolute center-h-v">
                  <Icon
                    icon={"uil:phone"}
                    className="text-4xl text-green-600"
                  />
                </div>
              </div>
              <div className="mt-6">
                <h2 className="sub-header-2 text-center  dark:text-white">
                  Telefon
                </h2>
              </div>
              <div className="mt-6">
                <p className="paragraph-4 mt-3 ">
                  <span className="pb-1 cursor-pointer transition duration-150 border-b-[1px] border-transparent hover:border-green-600">
                    <a href="tel:+420725814999">+420 725 814 999</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="lg:px-8">
              <div className="relative">
                <LuHexagon className="w-32 h-32 text-[#f3faf6] mx-auto dark:text-slate-900 fill-[#f3faf6] dark:fill-[#0F1e2c]" />
                <div className="absolute center-h-v">
                  <Icon
                    icon={"uil:envelope"}
                    className="text-4xl text-green-600"
                  />
                </div>
              </div>
              <div className="mt-6">
                <h2 className="sub-header-2 text-center  dark:text-white">
                  Email
                </h2>
              </div>
              <div className="mt-6">
                <p className="paragraph-4 mt-3 ">
                  <span className="pb-1 cursor-pointer transition duration-150 border-b-[1px] border-transparent hover:border-green-600">
                    <a href="mailto:jankovych.daria@seznam.cz">
                      jankovych.daria@seznam.cz
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
