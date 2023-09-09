import BookMarks from "@/components/bookmark";
import Header from "@/components/header";
import { BookMarkList } from "@/common";
import styles from "./index.module.scss";

export default function Page() {
  return (
    <main className={styles["root"]}>
      <Header />
      <main className={styles["bookmark"]}>
        {BookMarkList &&
          BookMarkList.map((item) => (
            <BookMarks key={item.href} content={item} />
          ))}
      </main>
    </main>
  );
}
