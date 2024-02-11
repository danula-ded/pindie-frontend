import Styles from './CardsList.module.css'

export const NewCardsList = () =>{
    return(
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id="new">
            Новинки
            </h2>
            <ul className={Styles["cards-list"]}>
                <li className={Styles["cards-list__item"]}>
                    <a href="/game-id.html" className={Styles["card-list__link"]}>
                    <article className={Styles["card"]}>
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                        alt=""
                        className={Styles["card__image"]}
                        />
                        <div className={Styles["card__content-block"]}>
                            <h3 className={Styles["card__title"]}>Go Away</h3>
                            <p className={Styles["card__description"]}>
                                Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.
                            </p>
                            <div className={Styles["card__info-container"]}>
                                <p className={Styles["card__author"]}>
                                Автор: <span className={Styles["card__accent"]}>Mahisto</span>
                                </p>
                                <p className={Styles["card__votes"]}>
                                Голосов на сайте: <span className={Styles["card__accent"]}>20</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className={Styles["cards-list__item"]}>
                    <a href="/game-id.html" className={Styles["card-list__link"]}>
                    <article className={Styles["card"]}>
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                        alt=""
                        className={Styles["card__image"]}
                        />
                        <div className={Styles["card__content-block"]}>
                            <h3 className={Styles["card__title"]}>G.U.N.N.E.R.</h3>
                            <p className={Styles["card__description"]}>
                                Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.
                            </p>
                            <div className={Styles["card__info-container"]}>
                                <p className={Styles["card__author"]}>
                                Автор: <span className={Styles["card__accent"]}>IDKWIAm</span>
                                </p>
                                <p className={Styles["card__votes"]}>
                                Голосов на сайте: <span className={Styles["card__accent"]}>10</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className={Styles["cards-list__item"]}>
                    <a href="/game-id.html" className={Styles["card-list__link"]}>
                    <article className={Styles["card"]}>
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                        alt=""
                        className={Styles["card__image"]}
                        />
                        <div className={Styles["card__content-block"]}>
                            <h3 className={Styles["card__title"]}>Space Terror</h3>
                            <p className={Styles["card__description"]}>
                                Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.
                            </p>
                            <div className={Styles["card__info-container"]}>
                                <p className={Styles["card__author"]}>
                                Автор: <span className={Styles["card__accent"]}>IDKWIAm</span>
                                </p>
                                <p className={Styles["card__votes"]}>
                                Голосов на сайте: <span className={Styles["card__accent"]}>20</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className={Styles["cards-list__item"]}>
                    <a href="/game-id.html" className={Styles["card-list__link"]}>
                    <article className={Styles["card"]}>
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                        alt=""
                        className={Styles["card__image"]}
                        />
                        <div className={Styles["card__content-block"]}>
                            <h3 className={Styles["card__title"]}>Square Slayer</h3>
                            <p className={Styles["card__description"]}>
                                Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.
                            </p>
                            <div className={Styles["card__info-container"]}>
                                <p className={Styles["card__author"]}>
                                Автор: <span className={Styles["card__accent"]}>niclan</span>
                                </p>
                                <p className={Styles["card__votes"]}>
                                Голосов на сайте: <span className={Styles["card__accent"]}>10</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
            </ul>
        </section>
    );
}