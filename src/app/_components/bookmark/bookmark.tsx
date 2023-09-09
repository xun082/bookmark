"use-client";

import { BookMarkType } from "@/types";
import styles from "./index.module.scss";

interface BookMarkPropsType {
  content: BookMarkType;
}

const BookMarks = (props: BookMarkPropsType) => {
  const { content } = props;
  const { href, name, icon } = content;

  return (
    <a
      className={styles["root"]}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
    >
      <img className={styles["icon"]} src={icon} alt="" />
      <div className={styles["content"]}>{name}</div>
    </a>
  );
};

export default BookMarks;
