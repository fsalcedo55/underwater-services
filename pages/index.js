import Head from "next/head"
import Contact from "../components/contact"
import Tabs from "../components/tabs"
import coverPhoto from ".././public/cover-photo.jpg"
import bottomHero from ".././public/bottomhero-long.jpg"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seamaster Marine Repair</title>
        <meta
          name="Seamaster Marine Repair takes care of your underwater needs in Miami-Dade, FL and Broward, FL. We have over 25 years of experience servicing marine vessels."
          content="Seamaster Marine Repair"
        />
      </Head>

      <main className="lg:flex lg:justify-center">
        {/* <div className="lg:container flex flex-col py-14 space-y-6 lg:h-[38rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 lg:mx-3">
            <div className="lg:max-w-2xl">
              <div className="flex flex-col text-center">
                <h1 className="text-4xl font-bold text-gray-800 sm:text-6xl">
                  We take care of your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-800 drop-shadow-lg">
                    underwater
                  </span>{" "}
                  needs
                </h1>
                <div className="h-8"></div>
                <p className="text-2xl text-blue-800">+ Some things we do</p>
              </div>
              <div className="h-8"></div>
              <Tabs />
            </div>
          </div>

          <div className="flex items-center justify-center mx-3 lg:w-1/2">
            <Image
              src={coverPhoto}
              alt="Seacraft Marine Repair"
              // width="550"
              // height="550"
              className="rounded-lg"
            />
          </div>
        </div> */}
        {/* <div className="flex items-center justify-center h-24 my-12 bg-gradient-to-l from-cyan-500 to-blue-800">
          <div className="flex flex-row text-3xl font-bold text-white">
            <p className="px-24">Reliable</p>
            <p className="px-24">Experienced</p>
            <p className="px-24">High-Quality</p>
          </div>
        </div> */}
      </main>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(${coverPhoto.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-16 text-5xl font-semibold text-white sm:text-8xl">
              We take care of your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 drop-shadow-lg">
                underwater
              </span>{" "}
              needs
            </h1>
            <Link href="/#services">
              <button className="text-white normal-case btn btn-primary btn-lg bg-gradient-to-l from-cyan-500 to-blue-500">
                Check out some of our services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden h-24 md:block min-w-screen bg-gradient-to-t from-cyan-500 to-blue-800"></div>
      <section id="services">
        <div className="block h-12 min-w-screen"></div>
        <Tabs />
        <div className="block h-12 min-w-screen"></div>
      </section>

      <section id="contact">
        <Contact />
      </section>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(${bottomHero.src})`,
          width: "100%",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center md:text-left hero-content text-neutral-content">
          <div className="max-w-8xl">
            <h1 className="max-w-xl text-6xl text-white font-extralight md:mr-96 mb-96 sm:text-8xl">
              We keep your boat afloat
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
