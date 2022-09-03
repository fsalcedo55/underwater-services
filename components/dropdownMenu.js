import { Menu } from "@headlessui/react"
import { nestedServices } from "../data/services"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useRouter } from "next/router"
import { iconHelper } from "../utils/iconHelper"

export default function DropdownMenu() {
  const router = useRouter()

  return (
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
        className="absolute right-0 mt-2 lg:w-[35rem] lg:p-4 lg:flex lg:justify-between origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {Object.keys(nestedServices).map((category, idx) => (
          <div key={category}>
            <div>
              <div>{category}</div>
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
                    } block px-4 py-2 text-sm rounded-lg`}
                  >
                    <a className="flex items-center gap-2">
                      <span className="text-xl">
                        {iconHelper(service.name)}
                      </span>
                      <span>{service.name}</span>
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
