import React from "react";

import styles from "./../../styles/components/cards/fadeInCard.module.scss";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const FadeInCard = ({ title, image, imageDes, description, linkName }) => {
  const { ref: myRef, inView } = useInView();

  return (
    <div ref={myRef} className={`${styles.card} ${inView ? styles.show : ""}`}>
      <Image
        src={image}
        alt={imageDes}
        className={styles.card_image}
        width={"300"}
        height={"300"}
      />
      <h1 className={styles.card_title}>{title}</h1>
      <p className={styles.card_description}>{description}</p>
      <Link href="/services">
        <a className={`${styles.card_button}`}>{linkName}</a>
      </Link>
    </div>
  );
};

export default FadeInCard;
