import React, { useState, useEffect } from "react";
import styles from "./../styles/components/Navbar.module.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMail,
} from "react-icons/ai";

import { BsChatLeftQuote, BsBriefcase, BsPeople } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

import Image from "next/image";

import bigLogo from "./../public/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={styles.container}>
      <div className={styles.title_container}>
        <div className={styles.logo_wrapper}>
          <Link href="/">
            <Image
              src={bigLogo}
              alt="company logo"
              height="72px"
              width="200px"
              className={styles.logo}
            />
          </Link>
        </div>
        <div
          id={styles.icon_wrapper}
          className={`${styles.desktop_hide} ${
            isOpen ? styles.icon_opened : styles.icon_closed
          }`}
        >
          {isOpen ? (
            <AiOutlineClose
              className={styles.icon}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <GiHamburgerMenu
              className={styles.icon}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      <div
        id={styles.menu_container}
        className={isOpen ? styles.menu_open : styles.menu_closed}
      >
        <Link className={styles.menu_item} href="/">
          <div
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineHome className={styles.item_icon} />
            <div className={styles.item_name}>Home</div>
          </div>
        </Link>
        <Link className={styles.menu_item} href="/about">
          <div
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsPeople className={styles.item_icon} />
            <div className={styles.item_name}>About Us</div>
          </div>
        </Link>
        <Link className={styles.menu_item} href="/services">
          <div
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsBriefcase className={styles.item_icon} />
            <div className={styles.item_name}>Services</div>
          </div>
        </Link>
        <Link className={styles.menu_item} href="/testimonals">
          <div
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsChatLeftQuote className={styles.item_icon} />
            <div className={styles.item_name}>Testimonals</div>
          </div>
        </Link>
        <Link className={styles.menu_item} href="/contact">
          <div
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineMail className={styles.item_icon} />
            <div className={styles.item_name}>Contact Us</div>
          </div>
        </Link>

        <Link className={styles.menu_item} href="/login">
          <div
            id={styles.login_button}
            className={styles.item_wrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineUser className={styles.item_icon} />
            <div className={styles.item_name}>Login</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
