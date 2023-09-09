"use-client";

import styles from "./index.module.scss";

interface ArticleAsidePropsTypes {
  title: string;
  data: any[];
}

const UserArticleAside = (props: ArticleAsidePropsTypes) => {
  const { title, data } = props;

  return (
    <aside className={styles["root"]}>
      <header>{title}</header>
      <>
        {data &&
          data.map((item, index) => {
            const {
              article_id,
              article_info: {
                brief_content,
                title,
                collect_count,
                comment_count,
                view_count,
              },
            } = item;

            return (
              <a
                className={styles["aside-article"]}
                href={`https://juejin.cn/post/${article_id}`}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
              >
                <div className={`${styles["info"]} ${styles["title"]}`}>
                  {title}
                </div>
                <div className={`${styles["info"]} ${styles["desc"]}`}>
                  {brief_content}
                </div>
                <div className={styles["information"]}>
                  <div>{view_count} 浏览</div>
                  <div>{comment_count} 评论</div>
                  <div>{collect_count} 收藏</div>
                </div>
              </a>
            );
          })}
      </>
    </aside>
  );
};

export default UserArticleAside;
