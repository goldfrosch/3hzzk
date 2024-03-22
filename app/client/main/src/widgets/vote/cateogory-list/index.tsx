import { VoteCategoryCard } from "@/features/vote/ui";
import * as styles from "./styles.css";
import { Link } from "@tanstack/react-router";

const CategoryList = () => {
  return (
    <div className={styles.categoryListLayout}>
      <Link to="/vote/number">
        <VoteCategoryCard
          category={"숫자 투표"}
          description={
            <>
              채팅을 통해 진행 가능한 투표. <br />
              시청자들을 대상으로 선택지를 제공하고 선택을 해주는 기능으로 특정
              선택지를 고른 시청자를 추첨 가능하다. <br />
              <br />
              시청자 참여 방법:{" "}
              <span className={styles.categoryListDescStrong}>
                !투표 (투표숫자)
              </span>
            </>
          }
          imageUrl={
            "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
          }
        />
      </Link>
      <Link to="/vote/user">
        <VoteCategoryCard
          category={"유저 추첨"}
          description={
            <>
              채팅을 통해 진행 가능한 추첨. <br />
              추첨을 시작한 이후의 채팅을 기준으로 특정 시청자를 추첨하는 기능{" "}
              <br />
              <br />
              시청자 참여 방법: 추첨 시작 이후 채팅
            </>
          }
          imageUrl={
            "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
          }
        />
      </Link>

      <VoteCategoryCard
        category={"준비 중"}
        description={<>준비 중인 기능 입니다!</>}
        imageUrl={
          "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
        }
      />
      <VoteCategoryCard
        category={"준비 중"}
        description={<>준비 중인 기능 입니다!</>}
        imageUrl={
          "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"
        }
      />
    </div>
  );
};

export default CategoryList;
