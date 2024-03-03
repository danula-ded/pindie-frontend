"use client"
import Styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles["footer"]}>
      <a href="/" className={Styles["footer__logo"]}>
        <span className={Styles["footer__logo-name"]}>pindie</span>
        <span className={Styles["footer__logo-copy"]}>, XXI век</span>
      </a>
      <ul className={Styles["social-list"]}>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            YT
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            ВК
          </a>
        </li>
        <li className={Styles["social-list__item"]}>
          <a href="" className={`button ${Styles["social-list__link"]}`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  );
};
