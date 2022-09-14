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
        <div className="flex items-center justify-center h-24 text-center bg-gradient-to-r from-cyan-200 to-blue-500">
          <h1 className="text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {currService?.name} in Miami
          </h1>
        </div>
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

          <div className="divider"></div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
