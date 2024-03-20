import { Card } from "@packages/ui";
import type { ReactNode } from "react";

import * as styles from "./styles.css";

type VoteCategoryCardProps = {
  category: ReactNode;
  description: ReactNode;
  imageUrl: `https://${string}`;
};

const VoteCategoryCard = ({
  category,
  description,
  imageUrl,
}: VoteCategoryCardProps) => {
  return (
    <Card element="a" className={styles.categoryLayout}>
      <img
        src={imageUrl}
        alt={`${category} 썸네일`}
        width={"100%"}
        height={200}
        className={styles.categoryThumbnail}
      />
      <h3 className={styles.categoryTitle}>{category}</h3>
      <p className={styles.categoryDesc}>{description}</p>
    </Card>
  );
};

export default VoteCategoryCard;
