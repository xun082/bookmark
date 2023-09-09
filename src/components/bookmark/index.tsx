"use-client";

import { BookMarkType } from "@/types";
import styles from "./index.module.scss";

interface BookMarkPropsType {
  content: BookMarkType;
  className?: string;
}

const BookMarks = (props: BookMarkPropsType) => {
  const { content, className = "" } = props;
  const { href, name, icon } = content;

  return (
    <a
      className={`${styles["root"]} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
    >
      <img className={styles["icon"]} src={icon} alt="" />
      <span className={styles["content"]}>{name}</span>
    </a>
  );
};

export default BookMarks;
