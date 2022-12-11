import Head from "next/head";

import favicon from "./../public/logo.png";

const HeadTags = ({ title }) => {
  return (
    <Head>
      <title>Gopher Courier Express</title>
      <meta name="description" content="Gopher Courier Express" />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default HeadTags;
