import React, { useMemo } from "react";
import { Link } from "gatsby";
import { Node } from "../../types/node";
import * as styles from "./rowItem.module.css";

interface RowItemProps {
  node: Node;
}

const RowItem: React.FC<RowItemProps> = ({ node }) => {
  const { title, tags, date, updated } = node.frontmatter;
  const { slug } = node.fields;

  return (
    <div className={styles.rowItem}>
      <div className={styles.leftSection}>
        <Link to={`/lines${slug}`} className={styles.title}>
          {title.toLowerCase()}
        </Link>
        {tags && tags.length > 0 && <div className={styles.tags}>{`[${tags.join(", ")}]`}</div>}
      </div>

      <div className={styles.rightSection}>
        <div className={styles.date}>{date}</div>
        {updated && <div className={styles.date}>Updated: {updated}</div>}
      </div>
    </div>
  );
};

export default RowItem;
