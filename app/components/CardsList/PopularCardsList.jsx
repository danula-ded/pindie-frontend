import Styles from './CardsList.module.css'
import { PopularCardsFragment } from './PopularCardsFragment';

export const PopularCardsList = () =>{
    return(
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id="popular">
            Популярное
            </h2>
            <ul className={Styles["cards-list"]}>
                <PopularCardsFragment/>
            </ul>
        </section>
    );
}