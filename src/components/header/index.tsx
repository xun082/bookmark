"use-client";

import styles from "./index.module.scss";
import BookMarks from "../bookmark";
import { HeaderList } from "@/common";

const Header = () => {
  return (
    <header className={styles["root"]}>
      {HeaderList.map((item) => (
        <BookMarks key={item.href} content={item} className={styles["title"]} />
      ))}
    </header>
  );
};

export default Header;
