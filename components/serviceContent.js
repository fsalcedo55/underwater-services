import Head from "next/head";

export const ServiceContent = ({ title, description, image }) => {
  return (
    <div className="m-20">
      <Head>
        <title>{title}</title>
        <meta name={title} content="Seaskill Marine Repair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-xl font-bold text-gray-800 lg:text-3xl">{title}</div>
    </div>
  );
};
