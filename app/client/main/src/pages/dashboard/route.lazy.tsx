import { DashBoardHeader, DashBoardSideBar } from "@/widgets/dashboard";
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
        <div style={{ padding: 40 }}>
          통계, 기록 대시보드는 준비중인 서비스이니 조금만 기달려주세요 :)
          <p>서비스 바로 가기</p>
          <div>
            <button>투표</button>/<button>룰렛</button>
          </div>
        </div>
      </div>
    </div>
  );
};
