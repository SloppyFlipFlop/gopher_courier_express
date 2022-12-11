import "../styles/globals.scss";
import HeadTags from "../components/HeadTags";
// import Loading from "../components/Loading";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
// import axios from "axios";
// import { destroyCookie, parseCookies } from "nookies";
// import { redirectUser, baseURL } from "../server/util/authUser";

import styles from "./../styles/utils/Layout.module.scss";
import Loading from "../components/Loading.jsx";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [canShowNav, setCanShowNav] = useState(true);

  const router = useRouter();

  const { user } = pageProps;

  useEffect(() => {
    setCanShowNav(true);

    // console.log(router.pathname);

    let noNavs = ["/404", "/500"];

    if (noNavs.includes(router.pathname)) {
      setCanShowNav(false);
    }
  }, [router.pathname]);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) =>
    // url === router.pathname &&
    // setTimeout(() => setLoading(false), 5000)
    setLoading(false)
  );

  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  return (
    <div className={styles.page_container}>
      <HeadTags />
      {/* <Loading /> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {canShowNav && <Navbar user={user} />}
          <Component className={styles.content} {...pageProps} />
          <Footer />
        </>
      )}

      {/* {loading && <Loading />} */}
      {/* <Component className={styles.content} {...pageProps} /> */}

      {/* <Footer /> */}
    </div>
  );
}

// MyApp.getInitialProps = async ({ ctx, Component }) => {
//   const { token } = parseCookies(ctx);
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   const protectedRoutes = ["/package_tracking"];
//   const isProtectedRoute = protectedRoutes.includes(ctx.pathname);

//   // let isProtectedRoute = false;

//   // for (let route of protectedRoutes) {
//   // 	if (ctx.pathname.includes(route)) isProtectedRoute = true;
//   // }

//   // console.log(ctx.pathname, isProtectedRoute);

//   // if (!token) {
//   //   isProtectedRoute && redirectUser(ctx, "/");
//   // } else {
//   //   try {
//   //     const res = await axios.get(`${baseURL(window)}/api/v1/user`, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     // console.log(res);
//   //     const { user } = res.data;

//   //     // if (user) !isProtectedRoute && redirectUser(ctx, "/");
//   //     pageProps.user = user;
//   //     pageProps.token = token;

//   //     if (user && ctx.pathname === "/") redirectUser(ctx, "/dashboard");
//   //     if (!user || !token)
//   //       throw new Error("No user or token. Deleting bad cookie.");
//   //   } catch (err) {
//   //     console.error(err);
//   //     destroyCookie(ctx, "token");
//   //     redirectUser(ctx, "/");
//   //   }
//   // }

//   return { pageProps };
// };

export default MyApp;
