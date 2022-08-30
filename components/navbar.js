import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { services } from "../pages/services/services";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white sm:px-4 py-3 drop-shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/seacraft-marine-repair.png"
              alt="SeaMaster Marine Repair"
              width="50"
              height="50"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900">
              Seamaster Marine Repair
            </span>
          </a>
        </Link>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-language-select"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white md">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <Menu as="div" className="relative">
                <Menu.Button className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  <div className="flex items-center gap-1">
                    <span>Services</span>
                    <span className="text-lg">
                      <MdKeyboardArrowDown />
                    </span>
                  </div>
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    {services.map((service) => (
                      <Menu.Item
                        as="div"
                        key={service.name}
                        className="cursor-pointer"
                      >
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "text-white bg-blue-700"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm`}
                          >
                            <Link href={service.href}>
                              <div className="flex items-center gap-2">
                                <span>{service.icon}</span>
                                <span>{service.name}</span>
                              </div>
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
