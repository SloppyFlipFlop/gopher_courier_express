import Link from "next/link";
import axios from "axios";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import styles from "./../styles/pages/Contact.module.scss";

// images
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

    axios
      .post("http://localhost:3000/api/mail", { formData })
      .then((res) => {
        // clear the entire form
        document.getElementById("myForm").reset();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.container}>
      <CardWithLink
        Children={
          <div className={styles.contactform_container}>
            <div className={styles.contactform}>
              <>
                <div className={styles.title}>
                  Contact Gopher Courier Express
                </div>

                <p>
                  We value integrity, quality, and timeliness. In working with
                  us, you get more than a vendor — you gain a friend in the
                  business.
                </p>
                <p>
                  To receive additional information about our services or to
                  schedule a project consultation, please fill out our contact
                  form. If you prefer to speak with someone immediately, please
                  call us at{" "}
                  <a className={styles.number} href="tel:+1-602-246-7437">
                    (602) 246-7437
                  </a>
                  .
                </p>
              </>

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
                id="myForm"
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
                  By submitting this form, you agree to allow us to use the
                  information submitted to send an email on you&apos;re behalf
                  to us.
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
