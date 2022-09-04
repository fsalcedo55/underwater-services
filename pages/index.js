import Head from "next/head"
import Image from "next/image"
import Contact from "../components/contact"
import Tabs from "../components/tabs"

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

      <main>
        <div className="lg:container flex flex-col px-6 py-14 mx-auto space-y-6 lg:h-[38rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-2xl">
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-gray-800 lg:text-6xl">
                  We take care of your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-800 drop-shadow-lg">
                    underwater
                  </span>{" "}
                  needs
                </h1>
                <div className="h-8"></div>
                <p className="text-blue-800 text-2xl">+ Some things we do</p>
              </div>
              <div className="h-8"></div>
              <Tabs />
            </div>
          </div>

          <div className="flex items-center justify-center lg:w-1/2">
            <Image
              src="/hero-photo.jpg"
              alt="Seacraft Marine Repair"
              width="550"
              height="550"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* <div className="bg-gradient-to-l from-cyan-500 to-blue-800 h-24 flex justify-center items-center my-12">
          <div className="flex flex-row text-white font-bold text-3xl">
            <p className="px-24">Reliable</p>
            <p className="px-24">Experienced</p>
            <p className="px-24">High-Quality</p>
          </div>
        </div> */}
      </main>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
