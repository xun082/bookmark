"use-client";

import styles from "./index.module.scss";
import BookMarks from "../bookmark";

const Header = () => {
  return (
    <div className={styles["root"]}>
      <BookMarks
        content={{
          href: "https://juejin.cn/user/3782764966460398",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4jZWTPWhTcRTFf/f/XhNTG8wkmPdeLS0dFZwsilg/EERwExQKWigu2kFqQU1T//GLGkXBthREoYObk+DiII3g7i4i2JiCS0HaNK3Je9chSQ22lnqme8+95wz3A/4Fq2bT+H+QzmjgWfW36tnofE4dAG9cT7gxCo7wwbN6vLW2tcFrCUEF4aC00S1tdKP0gUq9tilUAFJWU/4dPdpkfasDflYHWvL+lNVUq6YlUPGtTnXlVTut5jmt8XX/YY0Ht/VRV17VtzrVqnFBtJ6I1kKdkRV6nSSjQR/7y/t0KNEOBl46SU6Fy7yrhczUNSogKt64jjgxztSWGVmYkE9c0h1BF/ecdkZqK3wREKednrDM4+IiY0zKWjqrB5wYT4h4a8SQBI65HcwFWT3PrKwWrVyvLjFoDHsxdFaXGCzmZJRJWQvG9YIboyBCv4Z0CEB6TE+6cWalDS9a5X6xgKUgtT1ZPSIGXcjJR6y6gZIzCW5plVJY4WLpgbwXrBqsRLvHtCfu8sJJ0h8u8aa8wtXFvHwH8Kz6BqadJGejZebWKgz9mJCvWDX1aTZM/GuaMLt4KDsZjip8psqARoiJ88ok6I3KPJv/yQ2eSqWpkfVVNQgAL6uXnRjTGlFFERzc6BdXSnfl+d+9Gw+q8Tjpm3o4yOl8kNNv6YweWhf+OaAt0DTJaJDOaNDKbR/bfOffVnrk9zizKkQAAAAASUVORK5CYII=",
          name: "个人掘金",
        }}
        className={styles["title"]}
      />
      <BookMarks
        content={{
          href: "https://github.com/xun082",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrElEQVQ4jW2SzWucVRTGf+fe9847SW2n+WioIdZkJkzGWLMsQvBjpRv1H1BcqSB166aUbgQXLkpEEGnF7ty5Edw0orULtS5DjNOZ5qvEKkMzEUuS6bz33tPFvCNj6LM653LO8/A85wpHUJmbW0QKbwMvAU8BCHpXkZshhK+2mmu3BudloC5UagsfI7wvIsOooqoKID2gqvuqfLFeX7kAdPsEBmZdea74beLcKxoj+R4iPf7BXozBZ9n1jdudN+BOZgEtV5/8pJAW3/JZ90ZU/UiF0yAnVbWpUVvAMLASo7+oUYuFQvrqiRFT2NttLctUtXouleIN62whZNm19dur7wLFiZmzpdbmahvQyWr15L2Dg312dg5n5s5+6lzhvPfZQ59lLyapce+IkSGNkSjaASzQaW2udvrh3Gs07ud2LUqmMVhrzLA4+55RNS+IqsYYO91u+AwIvVz+F3C/DkEffh5i3FdFwSwaEaYUBKT950Z9Ox+MgA4QaL+/22xuCWzl708bwGkv6mMj5XLxiPJRCJOTRYXx3pw6A9wRVRUjpZIZej5Xso+xkAB65lhp0YhM5H9k3ajqrxgD8MAm5sp0tVrLczhqwZ+ZfXbeJckSoGJEUH42MYQvUZXgw5Kq3nRu+I/KMwvLM9X5c/3tqXLtuUpt4WuXyC+CzANRo4audq/Yf9r3d0pjp0atTT7M/OGbxpg9VE5nofPNv+32HsDQ+MgTqXVXRSRV5dAmNo3eL2036tekf7JKbeEngbEY/QcKDzYba7/9Z2B6ulhJj2+LkQljLD5k1zfq8XVY8yY/WVivr7wcNf5oE/e9Mcmt0dnZE/398TR1COMi4n3wlzfqq6/BWheIdiCouLfb+u742KllVP/+q+l/gHYAONgdkdHRxIbgL202fr+aiwLwCG7VPT6fvRxuAAAAAElFTkSuQmCC",
          name: "个人Github",
        }}
        className={styles["title"]}
      />
    </div>
  );
};

export default Header;
