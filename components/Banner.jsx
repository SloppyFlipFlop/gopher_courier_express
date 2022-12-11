import React from "react";
import Image from "next/image";
import BannerSRC from "./../public/images/banner.jpg";

// styles
import styles from "./../styles/components/Banner.module.scss";

const Banner = () => {
  return <Image className={styles.banner} src={BannerSRC} alt="Banner" />;
};

export default Banner;
