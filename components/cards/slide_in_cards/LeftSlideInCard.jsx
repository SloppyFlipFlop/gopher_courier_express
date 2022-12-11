import { useInView } from "react-intersection-observer";
import styles from "./../../../styles/components/cards/cardAnimations.module.scss";

const LeftSlideInCard = ({ content }) => {
  const { ref: myRef, inView: isInView } = useInView({
    triggerOnce: true, // uncomment when done testing
  });

  return (
    <div
      ref={myRef}
      className={`${styles.section_wrapper} ${
        isInView ? styles.slideIn : styles.hideLeft
      }`}
    >
      {content}
    </div>
  );
};

export default LeftSlideInCard;
