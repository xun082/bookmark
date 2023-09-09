"use-client";

import styles from "./index.module.scss";

interface ArticleAsidePropsTypes {
  title: string;
  data: any[];
}

const HotArticleAside = (props: ArticleAsidePropsTypes) => {
  const { title, data } = props;

  return (
    <aside className={styles["root"]}>
      <header>{title}</header>
      <>
        {data &&
          data.map((item, index) => {
            const {
              content: { title, content_id },
              content_counter: { view, like, collect, comment_count, hot_rank },
              author: { user_id, avatar },
            } = item;
            return (
              <a
                className={styles["aside-article"]}
                href={`https://juejin.cn/post/${content_id}`}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                role="presentation"
              >
                <div className={styles["left"]}>
                  <div className={styles["index"]}>{index}</div>
                  <div className={styles["content"]}>
                    <div className={styles["title"]}>{title}</div>
                    <div className={styles["info"]}>
                      <object data="" type="">
                        <a
                          href={`https://juejin.cn/user/${user_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={title}
                          role="presentation"
                        >
                          <img
                            src={avatar}
                            alt=""
                            className={styles["avatar"]}
                          />
                        </a>
                      </object>
                      <div>{view} 浏览</div>
                      <div>{comment_count} 评论</div>
                      <div>{collect} 收藏</div>
                      <div>{like} 点赞</div>
                    </div>
                  </div>
                </div>
                <div className={styles["ranking"]}>{hot_rank} 热度</div>
              </a>
            );
          })}
      </>
    </aside>
  );
};

export default HotArticleAside;
