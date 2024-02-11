export const Header = () =>{
    return(
      <header class="header">
        <a href="./index.html" class="logo">
          <img class="logo__image" src="/images/logo.svg" alt="Логотип Pindie" />
        </a>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="" class="menu__link">Новинки</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Популярные</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Шутеры</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Ранеры</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Пиксельные</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">TDS</a>
            </li>
          </ul>
          <div class="auth">
            <button class="auth__button">Войти</button>
          </div>
        </nav>
      </header>
    );
  }