import Head from "next/head"
import Contact from "../components/contact"
import Tabs from "../components/tabs"
import coverPhoto from ".././public/miami-ys.jpeg"
import bottomHero from ".././public/bottomhero-long.jpg"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seamaster Marine Repair</title>
        <meta
          name="Description"
          content="Seamaster Marine Repair takes care of your underwater needs in Miami-Dade, FL and Broward, FL. We have over 25 years of experience servicing marine vessels."
        />
      </Head>

      <div className="relative h-[27rem] sm:min-h-screen hero">
        <Image
          alt="Miami Underwater Services"
          src={coverPhoto.src}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="bg-slate-900 hero-overlay bg-opacity-90"></div>
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
              <button className="text-white normal-case btn btn-primary btn-lg bg-gradient-to-l from-primary to-primary-focus">
                Check out some of our services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="block text-gray-300 body-font bg-gradient-to-t from-primary to-primary-focus">
        <div className="container px-5 py-3 mx-auto">
          <div className="flex flex-col text-center md:justify-around md:flex-row">
            <div className="p-4 md:w-1/3">
              <h2 className="text-2xl font-semibold text-white title-font">
                Areas Served
              </h2>
              <p className="leading-relaxed">Miami-Dade, Broward, Monroe</p>
            </div>
            <div className="p-4 md:w-1/3">
              <h2 className="text-2xl font-semibold text-white title-font">
                24/7
              </h2>
              <p className="leading-relaxed">Emergency Services</p>
            </div>
            <div className="p-4 md:w-1/3">
              <h2 className="text-2xl font-semibold text-white title-font">
                Certified Commercial Divers
              </h2>
              <p className="leading-relaxed">
                Association of Diving Contractors
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      <section id="services">
        <div className="block h-12 min-w-screen"></div>
        <Tabs />
        <div className="block h-12 min-w-screen"></div>
      </section>

      <section id="contact">
        <Contact />
      </section>
      <div
        className="h-[18rem] sm:min-h-screen hero"
        style={{
          backgroundImage: `url(${bottomHero.src})`,
          width: "100%",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center md:text-left hero-content text-neutral-content">
          <div className="max-w-8xl">
            <h1 className="max-w-xl mb-40 text-4xl text-white font-extralight md:mr-96 sm:mb-96 sm:text-8xl">
              We keep your boat afloat
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
