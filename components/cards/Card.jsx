import React from "react";

import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

import fadeStyles from "./../../styles/components/cards/fadeInCard.module.scss";

import styles from "./../../styles/components/cards/layout.module.scss";

const Card = ({ title, image, alt, description, link, linkText }) => {
  const { ref: myRef, inView } = useInView();

  return (
    <div
      ref={myRef}
      className={`${fadeStyles.card} ${inView ? fadeStyles.show : ""} ${
        styles.card
      }`}
    >
      <div className={styles.title}>{title}</div>
      {image && <Image src={image} alt={alt} />}
      {description.map((paragraph, index) => (
        <div key={index}>
          <p key={index}>{paragraph}</p>
        </div>
      ))}
      {link && (
        <Link href={link}>
          <a className={styles.card_button}>{linkText}</a>
        </Link>
      )}
    </div>
  );
};

export default Card;
