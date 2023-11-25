import styles from "./Footer.module.scss";
import telega from "../Header/img/telegram.svg";
import viber from "../Header/img/viber.svg";
import wa from "../Header/img/whatsapp.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <div className={styles.aboutCompanyBlock}>
          <p className={styles.aboutCompanyText}>О компании</p>
          <ul className={styles.aboutCompanyUl}>
            <li>
              <a href="">Партнёрская программа</a>
            </li>
            <li>
              <a href="">Вакансии</a>
            </li>
          </ul>
        </div>
        <div className={styles.aboutCompanyMenu}>
          <p className={styles.aboutCompanyText}>Меню</p>
          <div className={styles.aboutCompanyMenuUl}>
            <ul>
              <li>
                <a href="">Расчёт стоимости</a>
              </li>
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
                <a href="">Наши клиенты</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Кейсы</a>
              </li>
              <li>
                <a href="">Благодарственные письма</a>
              </li>
              <li>
                <a href="">Сертификаты</a>
              </li>
              <li>
                <a href="">Блог на Youtube</a>
              </li>
              <li>
                <a href="">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <p className={styles.aboutCompanyText}>Контакты</p>
          <a className={styles.HeaderPhone} href="tel:75555555555">
            +7 555 555-55-55
          </a>
          <div className={styles.socialFooter}>
            <img src={telega} alt="" />
            <img src={viber} alt="" />
            <img src={wa} alt="" />
          </div>
          <p className={styles.aboutCompanyAdress}>
            Москва, Путевой проезд 3с1, к 902
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
