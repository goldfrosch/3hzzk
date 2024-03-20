import { Avatar } from "@/features/user";
import * as styles from "./styles.css";

const DashBoardHeader = () => {
  return (
    <>
      <header className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>대시보드</h1>
        <Avatar />
      </header>
      <hr className={styles.hairline} />
    </>
  );
};

export default DashBoardHeader;
