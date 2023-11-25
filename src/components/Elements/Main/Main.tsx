import styles from "./Main.module.scss";

const Main = () => {
  return (
    <section className={styles.main}>
      <main>
        <div className={styles.mainLeft}>
          <h1>
            Зарабатывайте <br></br> больше <br></br> <span>с WELBEX</span>
          </h1>
          <p className={styles.subtitle}>
            Развиваем и контролируем <br></br> продажи за вас
          </p>
        </div>
        <div className={styles.mainRight}>
          <h4>
            Вместе с {" "}
            <span>
              бесплатной <br></br> консультацией
            </span>{" "}
            мы дарим:
          </h4>
          <ul className={styles.mainRightUl}>
            <li>
              <div className={styles.mainRightSubtitle}>Виджеты</div>
              <p className={styles.mainRightText}>
                30  готовых <br></br> решений
              </p>
            </li>
            <li>
              <div className={styles.mainRightSubtitle}>Dashboard</div>
              <p className={styles.mainRightText}>
                с показателями <br></br> вашего бизнеса
              </p>
            </li>
            <li>
              <div className={styles.mainRightSubtitle}>Skype Аудит</div>
              <p className={styles.mainRightText}>
                отдела продаж <br></br> и CRM системы
              </p>
            </li>
            <li>
              <div className={styles.mainRightSubtitle}>35 дней</div>
              <p className={styles.mainRightText}>
                использования <br></br> CRM
              </p>
            </li>
          </ul>
          <ul className={styles.mainRightUlMobile}>
            <li>Skype аудит</li>
            <li>30 виджетов</li>
            <li>Dashboard</li>
            <li>Месяц аmoCRM</li>
          </ul>
          <div className={styles.btnContainer}>
            <button>Получить консультацию</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;
