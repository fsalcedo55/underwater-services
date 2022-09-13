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
    <div className="w-full max-w-4xl px-2 py-4 mx-auto sm:px-0">
      <div className="flex flex-col w-full mb-12 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800 title-font">
          Our Services
        </h1>
        <p className="mx-auto text-lg leading-relaxed lg:w-2/3">
          Your one stop shop for underwater services
        </p>
      </div>
      <Tab.Group>
        <Tab.List className="flex justify-center p-1 space-x-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-4 font-semibold leading-5 text-blue-500",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <p className="text-xl">{category}</p>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((services, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-4",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 shadow"
              )}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    href={`./services/${service.paramName}`}
                    key={service.name}
                  >
                    <div className="flex items-center p-4 text-gray-800 border rounded-lg cursor-pointer hover:bg-gray-100">
                      <div className="w-6 h-6 sm:text-2xl">
                        {iconHelper(service.name)}
                      </div>
                      <div className="mx-3">
                        <div className="text-xl font-semibold lg:text-xl">
                          {service.name}
                        </div>
                        <div className="hidden max-w-xs text-xs font-light text-gray-500 truncate sm:block md:text-base">
                          {service.shortDescription}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="h-16"></div>
    </div>
  )
}
