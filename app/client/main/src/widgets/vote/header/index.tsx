import { Avatar } from "@/features/user";
import * as styles from "./styles.css";

const VoteHeader = () => {
  return (
    <header className={styles.voteHeaderLayout}>
      <div className={styles.voteTitleLayout}>
        <h1 className={styles.voteTitle}>Live Vote</h1>
      </div>
      <Avatar />
    </header>
  );
};

export default VoteHeader;
