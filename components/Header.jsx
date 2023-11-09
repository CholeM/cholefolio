import React, { useState } from "react";
import Button from "./Styled/Button";
import Bar from "./Styled/Bar";
import Container from "./Styled/Container";
import Toolbar from "./Styled/Toolbar";
import { Toggle } from "./Toggle";
import { IconButton } from "./Styled/IconButton";
import HeadContainer from "./Styled/HeadContainer";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div className="w-[250px]">
      <ul className="relative py-2">
        <li className="hover:bg-gray-50 flex justify-start items-center relative w-full border-box text-left py-2 px-4">
          <Link href="/#projects" className=" flex-[1_1_auto] min-w-0 my-px">
            Projects
          </Link>
        </li>
        <li className="hover:bg-gray-50 flex justify-start items-center relative w-full border-box text-left py-2 px-4">
          <Link href="/#projects" className=" flex-[1_1_auto] min-w-0 my-px">
            About
          </Link>
        </li>
        <li className="hover:bg-gray-50 flex justify-start items-center relative w-full border-box text-left py-2 px-4">
          <Link href="/#projects" className=" flex-[1_1_auto] min-w-0 my-px">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <Bar>
      <HeadContainer>
        <Toolbar>
          <h6 className="text-sm lg:text-xl font-semibold whitespace-nowrap mr-2 grow hidden md:block text-gray-700 dark:text-gray-100">
            <Link href="/">Chole M</Link>
          </h6>
          <h5 className="text-lg whitespace-nowrap mr-2 grow flex md:hidden text-gray-700 dark:text-gray-100">
            <Link href="/">Chole M</Link>
          </h5>

          <div className="grow-0 flex md:hidden">
            <IconButton
              className="mx-[-12px] p-[12px] font-[28px]"
              onClick={handleDrawerOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="inline-block shrink-0 text-[1.5rem]"
                viewBox="0 0 24 24"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </IconButton>
            {open ? (
              <div
                className={
                  "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-opacity opacity-100 duration-500 translate-x-0"
                }
              >
                <div className="right-0 bg-white w-64 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform translate-x-0">
                  <div className="relative w-screen max-w-lg h-full">
                    {drawer}
                  </div>
                </div>
                <div className="w-screen h-full cursor-pointer" onClick={handleDrawerClose}></div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="hidden md:flex">
            <Button href="/#projects">
              <span className="hover:underline decoration-violet-500 decoration-4 underline-offset-8 text-sm lg:text-xl font-sans font-semibold whitespace-nowrap mr-2 grow md:block text-gray-700 dark:text-gray-100">
                Projects
              </span>
            </Button>
            <Button href="/#about">
              <span className="hover:underline decoration-violet-500 decoration-4 underline-offset-8 text-sm lg:text-xl font-sans font-semibold whitespace-nowrap mr-2 grow md:block text-gray-700 dark:text-gray-100">
                About
              </span>
            </Button>
            <Button href="/#contact">
              <span className="hover:underline decoration-violet-500 decoration-4 underline-offset-8 text-sm lg:text-xl font-sans font-semibold whitespace-nowrap mr-2 grow md:block text-gray-700 dark:text-gray-100">
                Contact
              </span>
            </Button>
            <div className="my-auto">
              <Toggle />
            </div>
          </div>
        </Toolbar>
      </HeadContainer>
    </Bar>
  );
}
