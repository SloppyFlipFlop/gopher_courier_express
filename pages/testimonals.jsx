import styles from "./../styles/pages/Testimonals.module.scss";

import cardStyles from "./../styles/components/cards/layout.module.scss";

import Link from "next/link";
import Banner from "../components/Banner";
import CardWithLink from "../components/cards/CardWithLink";

export default function About() {
  return (
    <div className={styles.container}>
      <Banner />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>
              Professional & Affordable Delivery Service in Arizona
            </div>

            <p>
              Package delivery expectations these days mean prompt service and
              secure transport. Gopher Courier Express offers affordable
              delivery service in Arizona that provides our customers with peace
              of mind when they call for a pick-up. Getting your items from
              their source to their destination quickly and efficiently is our
              promise to our clients. Individuals and businesses love our
              professionalism and courteous staff, and we’re their first call
              when they have something that needs to get from point A to point
              B. They trust our{" "}
              <Link href="/contact">
                <a className={`${cardStyles.link}`}>
                  courier delivery services
                </a>
              </Link>{" "}
              to ensure the confidentiality and safety of their documents,
              boxes, containers, and even palleted goods. Throughout the years,
              we’ve earned an exceptional reputation for superior delivery with
              unparalleled customer care. Contact our dispatch team with your
              request, and we’ll make it happen.
            </p>
          </>
        }
      />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>Delivery At Its Best</div>

            <p>
              Price is key. Excellent service should be affordable, and our
              rates are the best in the business. Our customers rave about our
              cost-effective solutions to their courier needs. They know that
              when they need a{" "}
              <Link href="/">
                <a className={`${cardStyles.link}`}>package delivery</a>
              </Link>{" "}
              they can count on our team. Trust our clients’ recommendations for
              an affordable delivery service that will ensure your items get
              where they need to go.
            </p>
          </>
        }
      />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>Testimonials</div>

            <p>
              Please check back soon for more details on Testimonials. In the
              meantime, please{" "}
              <Link href="/contact">
                <a className={`${cardStyles.link}`}>contact us</a>
              </Link>{" "}
              for more details.
            </p>
          </>
        }
      />
    </div>
  );
}
