import { nestedServices } from "../../data/services"
import Image from "next/image"
import Head from "next/head"
import { iconHelper } from "../../utils/iconHelper"

const values1 = Object.values(nestedServices)[0]
const values2 = Object.values(nestedServices)[1]
const values = values1.concat(values2)

export async function getStaticPaths() {
  const paths = values.map((service) => ({
    params: { paramName: service.paramName },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const paramName = context.params.paramName
  const currService = values.find((service) => service.paramName === paramName)
  return {
    props: { currService: currService },
  }
}

const ServicePage = ({ currService }) => {
  return (
    <div>
      <Head>
        <title>{currService?.name}</title>
        <meta name={currService?.name} content="Seamaster Marine Repair" />
      </Head>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col justify-center mx-auto lg:flex-row">
            <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
              <div className="flex justify-center gap-2 mb-4 font-bold text-gray-900 lg:justify-start title-font">
                <div className="text-3xl">{iconHelper(currService?.name)}</div>
                <h1 className="text-2xl sm:text-3xl">{currService?.name}</h1>
              </div>
              <div className="flex mb-4">
                <a className="flex-grow px-1 py-2 text-lg text-blue-600 border-b-2 border-blue-600">
                  Description
                </a>
                {/* <a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">
                  Reviews
                </a>
                <a className="flex-grow px-1 py-2 text-lg border-b-2 border-gray-300">
                  Details
                </a> */}
              </div>
              <div className="mb-4 leading-relaxed">
                {currService?.description ? (
                  <p>{currService?.description}</p>
                ) : (
                  <div>
                    Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    inxigo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean.
                  </div>
                )}
              </div>
              {/* <div className="flex py-2 border-t border-gray-200">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="flex py-2 border-t border-gray-200">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">Medium</span>
              </div>
              <div className="flex py-2 mb-6 border-t border-b border-gray-200">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div> */}
              {/* <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  $58.00
                </span>
                <button className="flex px-6 py-2 ml-auto text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-blue-600">
                  Button
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div> */}
            </div>
            <div className="flex justify-center">
              <Image
                alt="miami boat propeller"
                className="object-cover object-center w-full h-64 rounded-lg lg:w-1/2 lg:h-auto"
                src={currService?.photo}
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
