import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import DropdownMenu from "./dropdownMenu"
import Link from "next/link"
import { Transition } from "@headlessui/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="shadow-sm w-full z-10">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center px-5 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <Link href="/">
                <a className="flex items-center">
                  <Image
                    src="/seacraft-marine-repair.png"
                    alt="SeaMaster Marine Repair"
                    width="50"
                    height="50"
                  />
                  <span className="hidden sm:flex self-center sm:text-3xl text-lg font-semibold whitespace-nowrap text-slate-900">
                    Seamaster Marine Repair
                  </span>
                  <div className="flex flex-col sm:hidden whitespace-nowrap text-slate-900 text-center">
                    <span className="text-lg font-semibold">Seamaster</span>
                    <span className="text-base font-normal">Marine Repair</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex space-x-4">
                <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:text-md md:font-medium">
                  <li className="cursor-pointer">
                    <Link href="/">
                      <a className="nav-button">Home</a>
                    </Link>
                  </li>

                  <li className="cursor-pointer">
                    <a>
                      <DropdownMenu />
                    </a>
                  </li>

                  <li className="cursor-pointer">
                    <Link href="/">
                      <a className="nav-button">About</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/">
                      <a className="nav-button">Pricing</a>
                    </Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/#contact">
                      <a className="nav-button">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-5 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Dropdown menu below */}
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
                <li className="dropdown-nav-button">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <DropdownMenu />
                </li>

                <li className="dropdown-nav-button">
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
                <li className="dropdown-nav-button">
                  <Link href="/">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li className="dropdown-nav-button">
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Navbar
