import Styles from './Footer.module.css'

export const Footer = () => {
    return(
        <footer class={Styles["footer"]}>
          <a href="./index.html" class={Styles["footer__logo"]}>
            <span class={Styles["footer__logo-name"]}>pindie</span
            ><span class={Styles["footer__logo-copy"]}>, XXI век</span>
          </a>
          <ul class={Styles["social-list"]}>
            <li class={Styles["social-list__item"]}>
              <a href="" class={`button ${Styles["social-list__link"]}`}>YT</a>
            </li>
            <li class={Styles["social-list__item"]}>
              <a href="" class={`button ${Styles["social-list__link"]}`}>ВК</a>
            </li>
            <li class={Styles["social-list__item"]}>
              <a href="" class={`button ${Styles["social-list__link"]}`}>TG</a>
            </li>
          </ul>
        </footer>
    );
}