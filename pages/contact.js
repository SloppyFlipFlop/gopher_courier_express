import Image from "next/image";
import Link from "next/link";

// install nodemailer

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import styles from "./../styles/pages/Contact.module.scss";

import cardStyles from "./../styles/components/cards/layout.module.scss";

// images
import Banner from "../components/Banner";
import CardWithLink from "../components/cards/CardWithLink";

export default function About() {
  // send an email
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    console.log(formData);

    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className={styles.container}>
      <Banner />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>
              Contact Gopher Courier Express
            </div>

            <p>
              We value integrity, quality, and timeliness. In working with us,
              you get more than a vendor — you gain a friend in the business.
            </p>
            <p>
              To receive additional information about our services or to
              schedule a project consultation, please fill out our contact form.
              If you prefer to speak with someone immediately, please call us at{" "}
              <a className={cardStyles.number} href="tel:+1-602-246-7437">
                (602) 246-7437
              </a>
              .
            </p>
          </>
        }
      />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>Efficient Delivery Solutions</div>

            <p>
              Rely on Gopher Courier Express for fast and efficient delivery
              solutions. We offer various courier delivery services to transport
              everything from small packages to a fully loaded pallet. We work
              with a variety of industries to handle their deliveries and will
              ensure that your goods reach their destination on time.
              Additionally, we also offer cold-packed delivery solutions for
              clients with temperature-sensitive items such as food or medical
              supplies. So, whether you need{" "}
              <Link href="/">
                <a className={`${cardStyles.link}`}>
                  food delivery for catering
                </a>
              </Link>{" "}
              or you have important documents you need to be sent out, trust our
              skilled team to get your goods to their destination. Contact us to
              learn more about our delivery services cost or to schedule a
              pick-up with one of our delivery experts.
            </p>
          </>
        }
      />

      <CardWithLink
        Children={
          <>
            <div className={cardStyles.title}>Putting Our Clients First</div>

            <p>
              At our company, we understand that our customers rely on us to
              deliver their packages on time. That is why we are dedicated to
              always providing top-tier{" "}
              <Link href="/testimonals">
                <a className={`${cardStyles.link}`}>
                  courier delivery services
                </a>
              </Link>{" "}
              to meet our client’s needs. When you choose our couriers, know
              that your package is in good hands and that it will arrive at its
              destination as quickly and safely as possible. So, whether you are
              sending a single item or you want to set up a regular delivery
              schedule, trust our team to provide you with the courier services
              you need.
            </p>
          </>
        }
      />

      <CardWithLink
        Children={
          <div className={styles.contactform_container}>
            <div className={styles.contactform}>
              <div className={styles.title}>Contact Us</div>

              <div className={styles.info}>
                <div className={styles.info_item}>
                  <AiOutlineMail className={styles.icon} />

                  <div>
                    <div className={styles.item_title}>Email: </div>
                    <a href="mailto:sumit@courierphoenix.com">
                      sumit@courierphoenix.com
                    </a>
                  </div>
                </div>

                <div className={styles.info_item}>
                  <AiOutlinePhone className={styles.icon} />
                  <div>
                    <div className={styles.item_title}>Phone: </div>
                    <a href="tel:(602) A-GOPHER">(602) A-GOPHER</a>
                    <a href="tel:(602) 246-7437">(602) 246-7437</a>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleFormSubmit}
                // name="contactForm"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" />
                <div className={styles.formgroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />

                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name="phone" id="phone" />

                  <label htmlFor="subject">Subject</label>
                  <textarea name="subject" id="subject" rows="1"></textarea>

                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="5"></textarea>

                  <button type="submit">Send</button>
                </div>
              </form>

              <div className={styles.form__disclaimer}>
                <p>
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy">
                    <a className={`${styles.link}`}>Privacy Policy</a>
                  </Link>
                  .
                </p>

                <p>
                  We will never share your information with third parties. We
                  will only use your information to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
