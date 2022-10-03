import Link from "next/link"
import Image from "next/image"
import { nestedServices } from "../data/services"
import { iconHelper } from "../utils/iconHelper"
import { RiInstagramFill, RiFacebookBoxFill, RiPhoneFill } from "react-icons/ri"

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

          <a className="link link-hover" href="tel:+1-305-772-9065">
            Text or Call: (305) 772-9065
          </a>
          <button
            className="link link-hover"
            onClick={() =>
              (window.location = "mailto:seamastermarinerepair@gmail.com")
            }
          >
            seamastermarinerepair@gmail.com
          </button>

          {/* <p className="link link-hover">seamastermarinerepair@gmail.com</p> */}
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
            <a
              target="_blank"
              className="text-2xl"
              href="https://www.facebook.com/people/Seamaster-Marine-Repair/100086259049704/"
              rel="noopener noreferrer"
            >
              <RiFacebookBoxFill />
            </a>
            <a
              target="_blank"
              className="text-2xl"
              href="https://www.instagram.com/seamaster_marine_repair/"
              rel="noopener noreferrer"
            >
              <RiInstagramFill />
            </a>
            <a href="tel:+1-305-772-9065" className="text-2xl">
              <RiPhoneFill />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

;<a target="_blank" href="https://twitter.com/" rel="noopener noreferrer"></a>
