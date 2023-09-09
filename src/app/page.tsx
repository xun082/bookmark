import BookMarks from "@/components/bookmark";
import Header from "@/components/header";
import { BookMarkList } from "@/common";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const HotArticleAside = dynamic(() => import("../components/hotArticle"), {
  ssr: false,
});

const UserArticleAside = dynamic(() => import("../components/userArticle"), {
  ssr: false,
});

const getJueJinHotArticle = async () => {
  const res = await fetch(
    "https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&aid=2608&uuid=7185916214240413224&spider=0"
  );

  return res.json();
};

const getJueJinMomentArticle = async () => {
  const res = await fetch(
    "https://api.juejin.cn/content_api/v1/article/query_list?aid=2608&uuid=7185916214240413224&spider=0",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-secsdk-csrf-token":
          "000100000001439edb434f3b089f75f9e81e7048fd6211c593ccd8e20e9e37d77150ba02a82f17832493e8c0e29b",
      },
      referrer: "https://juejin.cn/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"user_id":"3782764966460398","sort_type":2,"cursor":"10"}',
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  return res.json();
};

export default async function Page() {
  const res = await getJueJinHotArticle();
  const moment = await getJueJinMomentArticle();

  return (
    <main className={styles["root"]}>
      <Header />
      <main className={styles["content"]}>
        <UserArticleAside title="个人文章" data={moment.data} />
        <main className={styles["bookmark"]}>
          <div className={styles["bookmark-content"]}>
            {BookMarkList &&
              BookMarkList.map((item) => (
                <BookMarks key={item.href} content={item} />
              ))}
          </div>
        </main>
        <HotArticleAside title="热门文章" data={res.data} />
      </main>
    </main>
  );
}
