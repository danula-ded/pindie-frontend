import Styles from "./GameNotFound.module.css";
import { NotFoundImage } from "./not-found.jsx";

export const GameNotFound = () => {
  return (
    <section className={Styles["game"]}>
      <div className={Styles["not-found"]}>
        <NotFoundImage />
        <h2 className={Styles["not-found__text"]}>
          Такой игры не существует :(
        </h2>
      </div>
    </section>
  );
};
