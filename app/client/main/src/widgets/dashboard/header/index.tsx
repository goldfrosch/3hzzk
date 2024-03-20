import { Avatar } from "@/features/user";
import * as styles from "./styles.css";

const DashBoardHeader = () => {
  return (
    <>
      <header className={styles.dashboardHeader}>
        <Avatar />
      </header>
      <hr className={styles.hairline} />
    </>
  );
};

export default DashBoardHeader;
