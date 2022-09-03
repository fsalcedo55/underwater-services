import { nestedServices } from "../../data/services"
import Image from "next/image"
import Head from "next/head"
import { iconHelper } from "../../utils/iconHelper"

const values1 = Object.values(nestedServices)[0]
const values2 = Object.values(nestedServices)[1]
const values = values1.concat(values2)

export async function getStaticPaths() {
  const paths = values.map((service) => ({
    params: { paramName: service.paramName.toString() },
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
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="flex items-center text-gray-900 text-3xl title-font font-medium mb-4 gap-4">
                <div>{iconHelper(currService?.name)}</div>
                <h1>{currService?.name}</h1>
              </div>
              <div className="flex mb-4">
                <a className="flex-grow text-blue-600 border-b-2 border-blue-600 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <div className="leading-relaxed mb-4">
                {currService?.description ? (
                  currService?.description
                ) : (
                  <p>
                    Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    inxigo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean.
                  </p>
                )}
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">Medium</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
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
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <Image
                alt="miami boat propeller"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
                src={currService?.photo}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage