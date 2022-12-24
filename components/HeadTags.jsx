import Head from "next/head";

const HeadTags = () => {
  return (
    <Head>
      <title>
        {/* Courier Delivery Services | Arizona - Gopher Courier Express */}
        Courier Delivery Service | Phoenix Arizona - Gopher Courier Express
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Shipping, Courier Delivery Services, Delivery Services, Delivery, Fast Delivery Services, Arizona Delivery Services"
      ></meta>
      <meta
        name="author"
        content="Fernando David Nevarez - Full-Stack Developer"
      ></meta>
      <meta
        name="description"
        content="Make sure your shipments get where they are going with our courier delivery services in Arizona. We provide the solutions you need for all of your packages."
      />
      <meta
        name="google-site-verification"
        content="kCwJrfgWYN2bBm6tT32TQtDyufTdXv6GGrMk2Vn8Tvs"
      />
      <link rel="icon" href={"/favicon.svg"} />
    </Head>
  );
};

export default HeadTags;
