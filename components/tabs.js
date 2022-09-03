import { useState } from "react"
import { Tab } from "@headlessui/react"
import { nestedServices } from "../data/services"
import Link from "next/link"
import { iconHelper } from "../utils/iconHelper"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Tabs() {
  let [categories] = useState(nestedServices)

  return (
    <div className="w-full max-w-xl px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 font-semibold leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-black hover:bg-white/[0.52] hover:text-gray-800"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((services, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 shadow"
              )}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    href={`./services/${service.paramName}`}
                    key={service.name}
                  >
                    <div className="flex items-center text-gray-800 p-3 hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer ">
                      <div className="w-5 h-5 text-2xl">
                        {iconHelper(service.name)}
                      </div>

                      <span className="mx-3 text-sm">{service.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
