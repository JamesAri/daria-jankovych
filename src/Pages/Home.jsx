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
                  Jsem realitní makléř s individuálním přístupem a více
                  než 30 lety praxe, připravený poskytnout komplexní služby v
                  oblasti nemovitostí podle vašich potřeb - kdykoliv 24/7.
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
                Realitní činnost provádím od roku 1993. Jsem realitní makléř,
                který provádí zakázky podle potřeb klientů s individuálním
                přístupem a formou přímé práce pro klienta v režimu tzv. 24/7.
                Za ty roky se v obchodu s nemovitostmi několikrát hodně změnilo.
                Každé takové období má svá specifika a pokud je realitní makléř
                zažil a prakticky prováděl, tak je lze využít pro zájem klienta
                k momentální i budoucí situaci v případě např. rodinné, nebo
                majetkové rozvahy. Většina mých klientů je opakovaných a na
                doporučení, protože tato činnost je prostě práce pro lidi a
                pouze zažitá zkušenost je ověřením schopností. Proto je
                nezbytnou částí mé práce i spousta dalších služeb, které jsou
                nezbytné pro správné realizace obchodů. Pracuji dle podmínek
                platného realitního zákona včetně zákonného pojištění
                odpovědnosti realitního zprostředkovatele.
              </p>
              <h1 className="sub-header dark:text-white mt-14">CO DĚLÁM</h1>
              <p className="paragraph">
                Součástí mé práce není jen zprostředkování prodeje, nebo nákupu
                nemovitostí podle určené poptávky. Spousta realitních obchodů má
                svá specifika, např. podle stavu omezení a jiných faktorů těchto
                obchodů. V rámci své práce provádím a zajišťuji:
                <ul className="text-md text-left font-medium text-amber-500 list-disc mb-7 mt-2">
                  <li className="ms-7">
                    posouzení tržní ceny (pro prodej, dědická řízení apod.)
                  </li>
                  <li className="ms-7">
                    srovnání tržních nabídek v místě a čase dle skutečně
                    obchodovaných cen
                  </li>
                  <li className="ms-7">
                    zajištění veškeré stavebně technické dokumentace a listin
                    katastru nemovitostí
                  </li>
                  <li className="ms-7">
                    zajištění a uzavření smluvní dokumentace mezi makléřem a
                    klientem
                  </li>
                  <li className="ms-7">
                    zajištění zpracování energetického štítku (PENB)
                  </li>
                  <li className="ms-7">
                    vyhodnocení rizik a výhod nabídky nemovitostí (územní plán a
                    jeho změny apod.)
                  </li>
                  <li className="ms-7">
                    zajištění fotodokumentace a inzerce nemovitostí na míru
                    každé nemovitosti
                  </li>
                  <li className="ms-7">
                    provedení prohlídek a vyhodnocení bonity zájemců
                  </li>
                  <li className="ms-7">
                    plný právní servis advokáta včetně smluvního zajištění
                    úschovy finančních prostředků
                  </li>
                  <li className="ms-7">úvěrové a jiné finanční poradenství</li>
                  <li className="ms-7">daňové poradenství </li>
                </ul>
                K nemovitostem se váží i další potřeby, které pomáhají s
                realizací za co nejvyšší kupní cenu, zvýšení
                konkurenceschopnosti na trhu a proto zajišťuji tyto služby
                vlastní a partnerů:
                <ul className="text-md text-left font-medium text-amber-500 list-disc my-2">
                  <li className="ms-7">
                    realizace úklidu a vyklizení nemovitostí včetně likvidace
                    odpadu
                  </li>
                  <li className="ms-7">
                    provedení stavebních, malířských a jiných nutných prací
                  </li>
                  <li className="ms-7">
                    provedení elektro a jiných technických oprav
                  </li>
                </ul>
              </p>
              <h1 className="sub-header dark:text-white mt-14">JAK TO DĚLÁM</h1>
              <p className="paragraph">
                Realitní makléř má nejen povinnosti dané zákonem, ale i určité
                poslání. Důsledně dbám na to, aby byl klient seznámen se všemi
                skutečnostmi tak, aby se mohl po rozvaze rozhodovat ve vlastním
                zájmu. Proto každá potřeba klientů počíná nejlépe osobním
                rozhovorem a konzultací o věci, před přípravou všeho potřebného.
                Moji klienti jsou stále informováni o průběhu věcí, mohou se
                mnou kdykoliv cokoliv konzultovat ve všech otázkách co je
                napadnou opravdu 24/7, protože každý z nás má jiné pracovní doby
                a možnosti. Každému dalšímu postupu předchází rozvaha a souhlas
                klienta.
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
