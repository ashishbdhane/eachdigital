"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header className="bg-contrast w-full h-[65px] fixed top-0 backdrop-blur-md z-50">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto ">
          <div className="container">
            <div className="relative  flex items-center justify-between">
              <div className="w-60 max-w-full ">
                <Link
                  href="/"
                  className="h-auto w-auto flex flex-row items-center"
                >
                  <Image
                    src="/images/logo/eachVerticalBlack.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className="cursor-pointer hover:animate-slowspin"
                  />
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                        navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                        navbarOpen ? "opacity-0 " : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                        navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px]  rounded bg-background border border-[#2A0E61]  py-4 px-6 duration-300   lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData.map((menuItem, index) => (
                        <li key={menuItem.id} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-base text-dark group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <>
                              <a
                                onClick={() => handleSubmenu(index)}
                                className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                  >
                                    <path
                                      d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </a>
                              <div
                                className={`submenu relative top-full left-0 rounded-md bg-dark transition-[top] duration-300 group-hover:opacity-100  lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              ></div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <Link
                    href="/login"
                    className="hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70  md:block"
                  >
                    Sign In
                  </Link>
                  
                  <Link
                    href="/signup"
                    className="hidden p-2 bg-gradient-to-r from-secondary-500 to-primary-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] md:block"
                  >
                    Sign Up
                  </Link>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
