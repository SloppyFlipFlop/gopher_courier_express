import styles from "./../styles/pages/About.module.scss";

import cardStyles from "./../styles/components/cards/layout.module.scss";
import Image from "next/image";
import Link from "next/link";

// import Banner from "../public/images/banner.jpg";

//images
import trucks from "./../public/images/trucks.jpg";
import drivers from "./../public/images/drivers.jpg";
import Card from "../components/cards/Card";
import CardWithLink from "../components/cards/CardWithLink";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.about_container}>
        <Card
          title={"About Us"}
          description={[
            `Gopher Courier Express has been a family owned business since 1980.
      Our mission is to provide specialized delivery service with the
      highest level of quality customer care. By exceeding customer
      expectations and meriting trustworthy relationships, we have been able
      to achieve and maintain a reputation in our industry of which we are
      very proud.`,
          ]}
        />

        <CardWithLink
          Children={
            <>
              <Image src={trucks} alt="trucks" />
              <h3 className={cardStyles.title}>
                Gopher will deliver complete satisfaction
              </h3>
              <ul className={cardStyles.list}>
                <li>State-of-the-art dispatching software</li>
                <li>Online ordering and tracking</li>
                <li>Online invoicing</li>
                <li>Instant email order confirmations</li>
                <li>Immediate signature confirmation</li>
                <li>GPS tracking</li>
                <li>Knowledgeable and friendly office staff</li>
                <li>Uniformed, professional, and courteous drivers</li>
                <li>Single delivery or multi-routed schedules</li>
                <li>
                  Cars, cargo vans, or trucks are used for the most effective
                  method of delivery
                </li>
                <li>Efficient routing means low prices for our clients</li>
                <li>Customized routing and delivery to meet your needs</li>
                <li>On-Demand priority deliveries</li>
              </ul>

              <p>
                We offer courier services the greater Phoenix area as well as
                cities throughout Arizona. We are also affiliated with a number
                of other courier services within the US. Please call us at{" "}
                <a href="tel:602-A-GOPHER">602-A-GOPHER</a> first wherever you
                are sending your package — it will be in good hands with Gopher.
              </p>
            </>
          }
        />

        <Card
          id={styles.drivers}
          title="GOPHER'S DRIVERS..."
          image={drivers}
          alt="pictures of professinal drivers"
          description={[
            `Are professional, courteous and competent. Many of our drivers
        have been employed with Gopher Courier for over five years. We
        screen all new employees so that our customers can feel assured
        that the person picking up the package will be of the highest
        caliber.`,
          ]}
        />

        <Card
          title="KNOWLEDGEABLE SERVICE REPRESENTATIVES..."
          description={[
            `Understand how important your package is. Our phones are answered by
        knowledgeable Gopher Courier employees 24 hours a day, 7 days a week —
        no answering services, no machines. We provide instant answers to all
        of your service and billing questions.`,
          ]}
        />

        <Card
          title="PERSONAL DELIVERY SERVICES"
          description={[
            `Assures quality. We're not too large, allowing us to know our
        customers very well - but we are also not too small, so we can handle
        many deliveries at a moment's notice with our professional network of
        courier drivers.`,
          ]}
        />

        <Card
          title="STATE OF THE ART TECHNOLOGY"
          description={[
            `Enables us to customize any billing needs you may have, and to track
      your packages from pick-up to delivery. GPS Driver Mobile Locator and
      Nextel two-way radios keep us in touch with our drivers for better
      response time. If you call our office to check the status of your
      delivery, we can get the location and estimated arrival time within
      seconds.`,
          ]}
        />

        <CardWithLink
          Children={
            <>
              <div className={cardStyles.title}>FROM THE OWNER</div>
              <p>
                All of us at Gopher pride ourselves in offering you, our valued
                customer, the very best courier services. My promise to you is
                that we will work diligently to have your package delivered as
                you expect. We train our drivers and dispatch personnel to
                understand that our customers come first. Our entire staff is
                trained on our state-of-the-art dispatch system which tracks
                your package from pickup to delivery.
              </p>

              <p>
                Whether you call our dispatch department to place an order or
                use our online order entry and tracking system, you will be able
                to place your order with ease and be able to know exactly when
                your package was picked up and delivered. As president and owner
                of Gopher Express, I&apos;d like to invite all customers and
                potential customers to feel free to call me directly with any
                questions regarding our service. Gopher looks forward to
                becoming your Arizona courier service and living up to our motto
                of on time, every time.
              </p>

              <p>
                <Link href="/contact">
                  <a className={`${cardStyles.card_button}`}>Contact Us</a>
                </Link>{" "}
                to schedule a delivery. Our courier service in Phoenix serves
                customers throughout Arizona.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
