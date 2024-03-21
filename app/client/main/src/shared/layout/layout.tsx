import type { PropsWithChildren } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

import * as styles from "./styles.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layoutStyle}>
      <Sidebar />
      <div className={styles.layoutBody}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
