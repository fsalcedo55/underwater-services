import { nestedServices } from "../../data/services"
import Image from "next/image"
import Head from "next/head"
import { iconHelper } from "../../utils/iconHelper"
import Link from "next/link"

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

export function Divider() {
  return <div className="my-10 divider"></div>
}

const ServicePage = ({ currService }) => {
  return (
    <div>
      <Head>
        <title>{currService?.name}</title>
        <meta
          name="description"
          content={`At Seamaster Marine Repair, we provide ${currService?.name} services in Miami, Broward, and Monroe. Our professional divers have plenty of experience to perform the job succesfully.`}
        />
      </Head>
      <section className="overflow-hidden text-gray-600 body-font">
        {/* <div className="flex items-center justify-center h-24 text-center bg-gradient-to-r from-primary to-primary-focus">
          <h1 className="text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {currService?.name} in Miami
          </h1>
        </div> */}
        <div className="md:h-96">
          <div
            className="min-h-full hero"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${currService?.heroPhoto})`,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="bg-blue-400 bg-opacity-70 hero-overlay"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-4xl">
                <h1 className="text-2xl font-semibold text-white sm:text-8xl">
                  {currService?.name} in Miami
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          {/* Content starts here */}

          <div className="flex flex-col items-center justify-center mx-auto lg:flex-row">
            <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
              <div className="flex justify-center gap-2 mb-4 font-bold text-gray-900 lg:justify-start title-font">
                <div className="text-3xl">{iconHelper(currService?.name)}</div>
                <h1 className="text-2xl sm:text-3xl">{currService?.name}</h1>
              </div>
              <div className="flex mb-4">
                <a className="flex-grow px-1 py-2 border-b-2 text-primary border-primary"></a>
              </div>
              <div className="mb-4 text-lg leading-loose">
                {currService?.description ? (
                  <p>{Object.values(currService?.description)[0]}</p>
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

          <Divider />

          {/* Content starts here */}

          <div className="flex flex-col-reverse items-center justify-center mx-auto lg:flex-row">
            <div className="flex justify-center">
              <Image
                alt="miami boat propeller"
                className="object-cover object-center w-full h-64 rounded-lg lg:w-1/2 lg:h-auto"
                src={currService?.photo2}
                width="500"
                height="500"
              />
            </div>
            <div className="w-full mb-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mb-0">
              <div className="flex mb-4">
                <a className="flex-grow px-1 py-2 text-2xl font-bold border-b-2 text-primary border-primary">
                  {Object.keys(currService?.description)[1]}
                </a>
              </div>
              <div className="mb-4 text-lg leading-loose">
                {currService?.description ? (
                  <p>{Object.values(currService?.description)[1]}</p>
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
          </div>

          {currService?.photo3 && (
            <div>
              <Divider />

              {/* Content starts here */}

              <div className="flex flex-col items-center justify-center mx-auto lg:flex-row">
                <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                  <div className="flex mb-4">
                    <a className="flex-grow px-1 py-2 text-2xl font-bold border-b-2 text-primary border-primary">
                      {Object.keys(currService?.description)[2]}
                    </a>
                  </div>
                  <div className="mb-4 text-lg leading-loose">
                    {currService?.description ? (
                      <p>{Object.values(currService?.description)[2]}</p>
                    ) : (
                      <div>
                        Fam locavore kickstarter distillery. Mixtape chillwave
                        tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                        fam inxigo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric.
                        Gastropub blue bottle austin listicle pour-over, neutra
                        jean.
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    alt="miami boat propeller"
                    className="object-cover object-center w-full h-64 rounded-lg lg:w-1/2 lg:h-auto"
                    src={currService?.photo3}
                    width="500"
                    height="500"
                  />
                </div>
              </div>
            </div>
          )}

          {currService?.photo4 && (
            <div>
              <Divider />

              {/* Content starts here */}

              <div className="flex flex-col-reverse items-center justify-center mx-auto lg:flex-row">
                <div className="flex justify-center">
                  <Image
                    alt="miami boat propeller"
                    className="object-cover object-center w-full h-64 rounded-lg lg:w-1/2 lg:h-auto"
                    src={currService?.photo4}
                    width="500"
                    height="500"
                  />
                </div>
                <div className="w-full mb-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mb-0">
                  <div className="flex mb-4">
                    <a className="flex-grow px-1 py-2 text-2xl font-bold border-b-2 text-primary border-primary">
                      {Object.keys(currService?.description)[3]}
                    </a>
                  </div>
                  <div className="mb-4 text-lg leading-loose">
                    {currService?.description ? (
                      <p>{Object.values(currService?.description)[3]}</p>
                    ) : (
                      <div>
                        Fam locavore kickstarter distillery. Mixtape chillwave
                        tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                        fam inxigo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric.
                        Gastropub blue bottle austin listicle pour-over, neutra
                        jean.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* <div className="flex items-center justify-center my-5">
        <button className="btn btn-primary">Contact Us</button>
      </div> */}
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
            <h1 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16 title-font">
              Interested in our services?
            </h1>
            <Link href="/#contact">
              <button className="flex-shrink-0 px-8 py-2 mt-10 text-lg text-white normal-case btn btn-primary sm:mt-0">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="h-6"></div>
    </div>
  )
}

export default ServicePage
