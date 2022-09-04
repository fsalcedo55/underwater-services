import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import DropdownMenu from "./dropdownMenu"

export default function Navbar() {
  const router = useRouter()

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
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white">
            <li>
              <Link href="/">
                <a
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <DropdownMenu />
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
              <Link href="/#contact">
                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
