import * as styles from "./styles.css";

const Avatar = () => {
  return (
    <div className={styles.avatarLayout}>
      <img
        // TODO: 추후 cloudfront 연동 추가
        src="/image/user/default-avatar.png"
        alt="user thumbnail"
        className={styles.avatarThumbnail}
        width={40}
        height={40}
      />
      <span className={styles.avatarName}>이름 테스트</span>
    </div>
  );
};

export default Avatar;
