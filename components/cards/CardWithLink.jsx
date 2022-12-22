import { useInView } from "react-intersection-observer";

import fadeStyles from "./../../styles/components/cards/fadeInCard.module.scss";

import styles from "./../../styles/components/cards/layout.module.scss";

const CardWithLink = ({ Children }) => {
  const { ref: myRef, inView } = useInView();

  return (
    <div
      ref={myRef}
      className={`${fadeStyles.card} ${inView ? fadeStyles.show : ""} ${
        styles.card
      }`}
    >
      {Children}
    </div>
  );
};

export default CardWithLink;
