import { useEffect, useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(false);
      }
    };
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.id !== "icon") {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);
  const links = [
    "home",
    "about-me",
    "projects",
    "certificates",
    "contact",
    "links",
  ];
  return (
    <div className="">
      <Bars3Icon
        className=" h-12 w-12 text-white fixed right-4 md:right-10 z-40 cursor-pointer mt-4 md:mt-6 icon bg-double-100 rounded-xl p-2"
        onClick={() => setShow(!show)}
        id="icon"
      />
      <div
        className={`flex justify-center fixed items-center -right-12 z-30 pr-10 pt-3 bg-double-100 transition-all duration-500 ease-in-out ${
          show ? `h-96 xl:w-1/3 w-96 rounded-bl-full` : " h-0 w-0"
        } `}
      >
        <ul
          className={` text-white text-3xl font-bold flex flex-col gap-2 items-end ${
            show ? "visible" : "hidden"
          }`}
          onClick={() => setShow(false)}
        >
          {links.map((item, key) => {
            return (
              <li
                className="hover:-translate-x-5 transition-all duration-300"
                key={`links${key}`}
              >
                <a href={`#${item}`}>
                  {item[0].toUpperCase()}
                  {item.slice(1).replace("-", " ")}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
