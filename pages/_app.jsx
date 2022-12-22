import "../styles/globals.scss";
import HeadTags from "../components/HeadTags";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

import styles from "./../styles/utils/Layout.module.scss";
import Loading from "../components/Loading.jsx";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [canShowNav, setCanShowNav] = useState(true);

  const router = useRouter();

  const { user } = pageProps;

  useEffect(() => {
    setCanShowNav(true);

    let noNavs = ["/404", "/500"];

    if (noNavs.includes(router.pathname)) {
      setCanShowNav(false);
    }
  }, [router.pathname]);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => setLoading(false));

  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  return (
    <div className={styles.page_container}>
      <HeadTags />
      {loading ? (
        <Loading />
      ) : (
        <>
          {canShowNav && <Navbar user={user} />}
          <Component className={styles.content} {...pageProps} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default MyApp;
