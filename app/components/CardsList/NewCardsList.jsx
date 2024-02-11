export const NewCardsList = () =>{
    return(
        <section className="list-section">
            <h2 className="list-section__title" id="new">
            Новинки
            </h2>
            <ul className="cards-list">
                <li className="cards-list__item">
                    <a href="/game-id.html" className="card-list__link">
                    <article className="card">
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                        alt=""
                        className="card__image"
                        />
                        <div className="card__content-block">
                            <h3 className="card__title">Go Away</h3>
                            <p className="card__description">
                                Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.
                            </p>
                            <div className="card__info-container">
                                <p className="card__author">
                                Автор: <span className="card__accent">Mahisto</span>
                                </p>
                                <p className="card__votes">
                                Голосов на сайте: <span className="card__accent">20</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className="cards-list__item">
                    <a href="/game-id.html" className="card-list__link">
                    <article className="card">
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                        alt=""
                        className="card__image"
                        />
                        <div className="card__content-block">
                            <h3 className="card__title">G.U.N.N.E.R.</h3>
                            <p className="card__description">
                                Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.
                            </p>
                            <div className="card__info-container">
                                <p className="card__author">
                                Автор: <span className="card__accent">IDKWIAm</span>
                                </p>
                                <p className="card__votes">
                                Голосов на сайте: <span className="card__accent">10</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className="cards-list__item">
                    <a href="/game-id.html" className="card-list__link">
                    <article className="card">
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                        alt=""
                        className="card__image"
                        />
                        <div className="card__content-block">
                            <h3 className="card__title">Space Terror</h3>
                            <p className="card__description">
                                Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.
                            </p>
                            <div className="card__info-container">
                                <p className="card__author">
                                Автор: <span className="card__accent">IDKWIAm</span>
                                </p>
                                <p className="card__votes">
                                Голосов на сайте: <span className="card__accent">20</span>
                                </p>
                            </div>
                        </div>
                    </article>
                    </a>
                </li>
                <li className="cards-list__item">
                    <a href="/game-id.html" className="card-list__link">
                    <article className="card">
                        <img
                        src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                        alt=""
                        className="card__image"
                        />
                        <div className="card__content-block">
                            <h3 className="card__title">Square Slayer</h3>
                            <p className="card__description">
                                Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.
                            </p>
                            <div className="card__info-container">
                                <p className="card__author">
                                Автор: <span className="card__accent">niclan</span>
                                </p>
                                <p className="card__votes">
                                Голосов на сайте: <span className="card__accent">10</span>
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