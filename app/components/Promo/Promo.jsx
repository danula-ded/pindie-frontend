export const Promo = () =>{
    return(
        <section className="promo">
            <div className="promo__description-block">
                <h2 className="promo__title">Твой промо-код</h2>
                <p className="promo__description">Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
                <button className="button promo__button">Получить код</button>
            </div>
            <img src="/images/promo-illustration.svg" alt="Собака" className="promo__image"/>
        </section>
    );
}