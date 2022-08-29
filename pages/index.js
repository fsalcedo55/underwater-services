import Head from "next/head";
import Image from "next/image";
import Contact from "../components/contact";
import Link from "next/link";
import { services } from "./services/services";

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
        <div className="container flex flex-col px-6 py-14 mx-auto space-y-6 lg:h-[38rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-2xl">
              <h1 className="text-2xl font-bold tracking-wide text-gray-800 lg:text-6xl">
                We take care of your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-800">
                  underwater
                </span>{" "}
                needs
              </h1>
              <p className="my-4 text-blue-800 text-2xl">+ What we do</p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                {services.map((service) => (
                  <Link href={service.href} key={service.name}>
                    <div className="flex items-center text-gray-800 p-3 hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer ">
                      <div className="w-5 h-5">{service.icon}</div>

                      <span className="mx-3">{service.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image
              src="/hero-photo.jpg"
              alt="Seacraft Marine Repair"
              width="550"
              height="550"
              className="rounded-lg drop-shadow"
            />
          </div>
        </div>
        <div className="bg-gradient-to-l from-cyan-500 to-blue-800 h-24 flex justify-center items-center my-12">
          <div className="flex flex-row text-white font-bold text-3xl">
            <p className="px-24">Reliable</p>
            <p className="px-24">Experienced</p>
            <p className="px-24">High-Quality</p>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  );
}
