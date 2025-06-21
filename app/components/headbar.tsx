"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo/logo_gemaria.svg"
import Link from "next/link";

const Headbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="#"
          className="flex items-start rtl:space-x-reverse">
          <Image
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-image"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${menuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#690003] dark:hover:bg-gray-700 dark:hover:text-[#690003] md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#690003] dark:hover:bg-gray-700 dark:hover:text-[#690003] md:dark:hover:bg-transparent dark:border-gray-700">
                About Us
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#690003] md:p-0 dark:text-white md:dark:hover:text-[#690003] dark:hover:bg-gray-700 dark:hover:text-[#690003] md:dark:hover:bg-transparent dark:border-gray-700">
                Products{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#690003] dark:hover:bg-gray-700 dark:hover:text-[#690003] md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600`}>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul
            className="hidden mb-4 space-y-4 md:mb-0 md:block"
            aria-labelledby="mega-menu-full-image-button">
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Kirin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Turbo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Polytron
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Sharp
              </a>
            </li>
          </ul>
          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                LG
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Dahua
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Hikvision
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#690003] hover:font-semibold dark:hover:text-[#690003]">
                Hilook
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style={{
              backgroundImage: "url(/docs/images/dashboard-overview.png)",
            }}>
            <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
              Explore our products and our brands.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
              Get started
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Headbar;
