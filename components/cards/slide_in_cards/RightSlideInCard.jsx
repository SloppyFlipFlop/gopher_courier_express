import { useInView } from "react-intersection-observer";
import styles from "./../../../styles/components/cards/cardAnimations.module.scss";

const RightSlideInCard = ({ content }) => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: true, // uncomment when done testing
  });

  return (
    <div
      ref={myRef}
      className={`${styles.section_wrapper} ${
        isInView ? styles.slideIn : styles.hideRight
      }`}
    >
      {content}
    </div>
  );
};

export default RightSlideInCard;
