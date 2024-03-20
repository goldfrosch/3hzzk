import DashBoardHeader from "@/widgets/dashboard/header";
import { DashBoardSideBar } from "@/widgets/dashboard/sidebar";
import { createLazyFileRoute } from "@tanstack/react-router";

import * as styles from "./styles.css";

export const Route = createLazyFileRoute("/dashboard")({
  component: () => <Page />,
});

export const Page = () => {
  return (
    <div className={styles.dashboardLayout}>
      <DashBoardSideBar />
      <div className={styles.dashboardMain}>
        <DashBoardHeader />
      </div>
    </div>
  );
};
