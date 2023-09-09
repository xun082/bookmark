import BookMarks from "./_components/bookmark/bookmark";
import { BookMarkList } from "@/common";
import styles from "./index.module.scss";

export default function Page() {
  return (
    <div className={styles["root"]}>
      {BookMarkList &&
        BookMarkList.map((item) => (
          <BookMarks key={item.href} content={item} />
        ))}
    </div>
  );
}
