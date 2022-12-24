import styles from "./../styles/pages/Services.module.scss";

//images
import servicesImage from "../public/images/services_picture.jpg";
import package_picture from "../public/images/package_image.jpg";
import Link from "next/link";

// react icons
import Card from "../components/cards/Card";
import CardWithLink from "../components/cards/CardWithLink";
import FadeInCard from "../components/cards/FadeInCard";

const services = () => {
  return (
    <div className={styles.container}>
      <Card
        title={"Prompt and Dependable Courier Services in Arizona"}
        description={[
          `By exceeding customer expectations and meriting
          trustworthy relationships, we
          have been able to achieve and maintain our reputation in our industry of
          which we are very proud.`,
        ]}
      />

      <CardWithLink
        Children={
          <>
            <div className={styles.title}>
              We offer a range of courier and package{" "}
              <Link href="/contact">
                <a className={`${styles.card_button}`}>delivery solutions,</a>
              </Link>{" "}
              including:
            </div>

            <ul>
              <li>
                All Day/ 1/2 Day / Expedited (2-hr.)/ Direct/Urgent service
              </li>
              <li>TSA certified next flight out and airport retrieval</li>
              <li>Customized routes and services to meet client needs</li>
              <li>
                Dedicated drivers for daily runs, scheduled stops, routed
                deliveries, and pickups
              </li>
              <li>
                Scheduled or routed end-of-day deliveries and after-hours
                delivers
              </li>
            </ul>
          </>
        }
      />

      <CardWithLink
        Children={
          <>
            <div className={styles.title}>
              SUPPORTING A WIDE RANGE OF BUSINESSES
            </div>

            <p>
              We provide{" "}
              <Link href="/">
                <a className={`${styles.card_button}`}>
                  courier delivery services{" "}
                </a>
              </Link>{" "}
              to all major industries and businesses while specializing in
              certain fields that require extra attention and dedicated support.
            </p>

            <p>
              <Link href="/">
                <a className={`${styles.card_button}`}>
                  Gopher Courier Express
                </a>
              </Link>{" "}
              easily handles time-sensitive medical deliveries and materials
              that require specialized support, such as x-rays, lab samples, and
              interoffice files. We also offer bulk mail pickup and delivery.
              Our team is relied upon by a range of contractors for construction
              site deliveries, and we also serve as “mobile tellers” for many
              local banks. We do this task by picking up deposits and delivering
              them to the banks while coordinating bag exchanges. We’ll meet
              your needs with regular routed pickups or on-demand call-ins.
            </p>
          </>
        }
      />

      <Card
        title={`Getting the Messages and Deliveries Through`}
        image={package_picture}
        alt="package"
        description={[
          `Our courier service dispatch department is second to none. The
        dispatchers are in constant contact with our drivers via the latest in
        computer and communication technology to send pickup orders. Our team
        of drivers can easily update the dispatch computer remotely to
        time-stamp every pickup and delivery. Your package is under our
        complete control on every phase of its journey.`,
        ]}
      />

      <div className={styles.block}>
        <p>Schedule your next pick-up and delivery.</p>
        <p className={styles.callNumber}>
          Call us: <a href="tel:602-246-7437">(602) 246-7437</a>
        </p>
      </div>
    </div>
  );
};

export default services;
