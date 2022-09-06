import { Menu } from "@headlessui/react"
import { nestedServices } from "../data/services"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useRouter } from "next/router"
import { iconHelper } from "../utils/iconHelper"

export default function DropdownMenu() {
  const router = useRouter()

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <div className="flex items-center gap-2 my-auto md:nav-button dropdown-nav-button lg:text-base">
          <span>Services</span>
          <span className="text-lg">
            <MdKeyboardArrowDown />
          </span>
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute lg:right-0 lg:mt-2 md:w-[35rem] lg:p-4 md:flex lg:justify-between origin-top-right rounded-md bg-gradient-to-bl from-white  via-gray-50 to-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {Object.keys(nestedServices).map((category, idx) => (
          <div key={category}>
            <div className="text-black cursor-default hover:text-black">
              <div className="p-2 text-xl font-semibold md:text-lg">
                {category}
              </div>
              <div className="border-b lg:h-2"></div>
            </div>
            {Object.values(nestedServices)[idx].map((service) => (
              <Menu.Item
                as="div"
                key={service.name}
                className="py-1 cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: `/services/${service.paramName}`,
                  })
                }}
              >
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-white drop-shadow" : "text-gray-700"
                    } block px-4 py-3 rounded-lg`}
                  >
                    <a className="flex items-center gap-2">
                      <span className="text-2xl">
                        {iconHelper(service.name)}
                      </span>
                      <span className="text-xl md:text-sm">{service.name}</span>
                    </a>
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        ))}
      </Menu.Items>
    </Menu>
  )
}
