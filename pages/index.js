import React from "react";
import styles from "./../styles/pages/Home.module.scss";
import Link from "next/link";
import Image from "next/image";

// cards
import FadeInCard from "../components/cards/FadeInCard";
import LeftSlideInCard from "../components/cards/slide_in_cards/LeftSlideInCard";

//images
import medImage from "./../public/images/Medical-Deliveries.jpg";
import mailRunImage from "./../public/images/Mail-Runs.jpg";
import constructionImage from "./../public/images/For-Construction.jpg";
import specialtiesImage from "./../public/images/Service-Specialties.jpg";
import RightSlideInCard from "../components/cards/slide_in_cards/RightSlideInCard";

import Banner from "../components/Banner";
import boxs from "../public/images/boxes.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.about_container}>
        {/* <LeftSlideInCard
          content={
            <h1 className={styles.title}>Welcome to Gopher Courier Express</h1>
          }
        /> */}

        {/* <RightSlideInCard content={<h3>sadsada</h3>} /> */}

        <Banner />
      </div>

      <div className={styles.card_container}>
        <FadeInCard
          title="Medical Deliveries"
          description="We specialize in delivering time-sensitive materials that require special care, such as X-rays, lab work, and interoffice files."
          image={medImage.src}
          imageDes="Medical Deliveries"
          link="/services"
          linkName="Learn More"
          className={styles.card}
        />
        <FadeInCard
          title="Mail Runs"
          description="Our professional drivers are on always on standby, so there’s no need to have your employees wait in line at the post office."
          image={mailRunImage.src}
          imageDes="Mail Runs"
          link="/services"
          linkName="Learn More"
          className={styles.card}
        />
        <FadeInCard
          title="For Construction"
          description="We're experienced in picking up and delivering floor plans, site plans, and other construction-related items to worksites."
          image={constructionImage.src}
          imageDes="For Construction"
          link="/services"
          linkName="Learn More"
          className={styles.card}
        />
        <FadeInCard
          title="Service Specialties"
          description="Although we offer deliveries for clients in a wide range of industries, there are several business types that we specialize in."
          image={specialtiesImage.src}
          imageDes="Service Specialties"
          link="/services"
          linkName="Learn More"
          className={styles.card}
        />
      </div>

      <div className={styles.order}>
        <Image src={boxs} alt="box images" id={styles.boxesImg} />
        <h3>TRUST THE PROFESSIONALS</h3>
        <h1 className={`${styles.important}`}>ON TIME. EVERY TIME</h1>

        <p>
          Please contact us today at{" "}
          <a href="tel:602-A-GOPHER">(602) 246-7437</a> to get an accurate
          quote, or learn more about our Arizona courier services,{" "}
        </p>

        <Link href="/contact">
          <a className={`${styles.card_button}`}>Contact Us</a>
        </Link>

        <h3>
          Call us at <a href="tel:602-A-GOPHER">602-A-GOPHER</a>
        </h3>
      </div>
    </div>
  );
}
