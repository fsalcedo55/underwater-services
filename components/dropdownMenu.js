import { Menu } from "@headlessui/react"
import { nestedServices } from "../data/services"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useRouter } from "next/router"
import { iconHelper } from "../utils/iconHelper"

export default function DropdownMenu() {
  const router = useRouter()

  return (
    <Menu
      as="div"
      // className="relative"
    >
      <Menu.Button>
        <div className="lg:nav-button dropdown-nav-button flex items-center gap-1">
          <span>Services</span>
          <span className="text-lg">
            <MdKeyboardArrowDown />
          </span>
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute lg:right-0 lg:mt-2 lg:w-[35rem] lg:p-4 lg:flex lg:justify-between origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {Object.keys(nestedServices).map((category, idx) => (
          <div key={category}>
            <div className="hover:text-black text-black cursor-default font-semibold text-xl">
              <div className="p-2">{category}</div>
              <div className="border-b lg:h-2"></div>
            </div>
            {Object.values(nestedServices)[idx].map((service) => (
              <Menu.Item
                as="div"
                key={service.name}
                className="cursor-pointer py-1"
                onClick={() => {
                  router.push({
                    pathname: `/services/${service.paramName}`,
                  })
                }}
              >
                {({ active }) => (
                  <div
                    className={`${
                      active ? "text-white bg-blue-800" : "text-gray-700"
                    } block px-4 py-3 rounded-lg`}
                  >
                    <a className="flex items-center gap-2">
                      <span className="text-2xl">
                        {iconHelper(service.name)}
                      </span>
                      <span className="text-xl">{service.name}</span>
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
