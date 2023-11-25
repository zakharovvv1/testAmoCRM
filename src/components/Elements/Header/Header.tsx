import styles from "./Header.module.scss";
import logo from "./img/logo_welbex.svg";
import telega from "./img/telegram.svg";
import viber from "./img/viber.svg";
import wa from "./img/whatsapp.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="">Услуги</a>
          </li>
          <li>
            <a href="">Виджеты</a>
          </li>
          <li>
            <a href="">Интеграции</a>
          </li>
          <li>
            <a href="">Кейсы</a>
          </li>
          <li>
            <a href="">Сертификаты</a>
          </li>
        </ul>
        <a className={styles.phone} href="tel:75555555555">
          +7 555 555-55-55
        </a>
        <div className={styles.social}>
          <a href="">
            <img src={telega} alt="" />
          </a>
          <a href="">
            <img src={viber} alt="" />
          </a>
          <a href="">
            <img src={wa} alt="" />
          </a>
        </div>
      </nav>
      <p className={styles.headerText}>
        крупный интегратор CRM <br></br> в Росcии и ещё 8 странах
      </p>
    </header>
  );
};

export default Header;
