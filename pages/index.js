import Head from "next/head"
import Image from "next/image"
import Contact from "../components/contact"
import Tabs from "../components/tabs"
import coverPhoto from ".././public/cover-photo.jpg"

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
        <div className="lg:container flex flex-col py-14 space-y-6 lg:h-[38rem] lg:py-16 lg:flex-row lg:items-center">
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
        </div>
        {/* <div className="flex items-center justify-center h-24 my-12 bg-gradient-to-l from-cyan-500 to-blue-800">
          <div className="flex flex-row text-3xl font-bold text-white">
            <p className="px-24">Reliable</p>
            <p className="px-24">Experienced</p>
            <p className="px-24">High-Quality</p>
          </div>
        </div> */}
      </main>
      <div className="hidden origin-top h-36 md:block skew-y-2 min-w-screen bg-gradient-to-l from-cyan-500 to-blue-800"></div>

      {/* <div
        className="w-full bg-center bg-cover h-[32rem]"
        style="background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);"
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              Build Your new{" "}
              <span className="text-blue-400 underline">Saas</span>
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div> */}

      <div className="lg:h-20"></div>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
