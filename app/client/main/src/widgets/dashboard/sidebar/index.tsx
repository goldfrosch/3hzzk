import * as styles from "./styles.css";

const DashBoardSideBar = () => {
  return (
    <aside className={styles.dashboardSide}>
      <div className={styles.dashboardSideLogoLayout}>
        {/* TODO: 추후 별도의 로고 만들기 */}
        <img
          src="/image/logo/logo.png"
          alt="3hzzk logo"
          width={36}
          height={36}
          className={styles.dashboardSideLogo}
        />
        <h2 className={styles.dashboardSideLogoTitle}>3hzzk</h2>
        <p></p>
      </div>
      <div></div>
    </aside>
  );
};

export default DashBoardSideBar;
