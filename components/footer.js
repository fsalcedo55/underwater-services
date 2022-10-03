import Link from "next/link"
import Image from "next/image"
import { nestedServices } from "../data/services"
import { iconHelper } from "../utils/iconHelper"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Boat Maintenance</span>
          {nestedServices["Boat Maintenance"].map((category, idx) => (
            <Link href={category.href} key={idx}>
              <a className="flex items-center gap-2 link link-hover ">
                <span>{iconHelper(category.name)}</span>
                <span>{category.name}</span>
              </a>
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Waterfront Maintenance</span>
          {nestedServices["Waterfront Maintenance"].map((category, idx) => (
            <Link href={category.href} key={idx}>
              <a className="flex items-center gap-2 link link-hover ">
                <span>{iconHelper(category.name)}</span>
                <span>{category.name}</span>
              </a>
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p className="link link-hover">Text or Call: (305) 772-9065</p>
          <p className="link link-hover">seamastermarinerepair@gmail.com</p>
          <div className="relative w-8 h-11">
            <Image src="/adci.png" alt="adci" layout="fill" />
          </div>
        </div>
      </footer>
      <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <Link href="/">
            <a className="flex items-center justify-center font-medium text-gray-900 cursor-pointer title-font lg:justify-start">
              <div className="flex flex-col items-center lg:flex-row">
                <div className="flex items-center">
                  <Image
                    src="/seacraft-marine-repair.png"
                    alt="SeaMaster Marine Repair"
                    width="50"
                    height="50"
                  />
                  <div className=" md:text-xl flex flex-col md:flex-row font-['Audiowide'] gap-2">
                    <span>Seamaster</span>
                    <span>Marine Repair</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 md:ml-2 sm:border-l-2 md:border-gray-200 md:py-2 md:mt-0">
                  © <span>{year}</span> All Rights Reserved
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
