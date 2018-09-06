import styles from './index.css';

export default function() {
  return (
    <>
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>
      <div className={`${styles.iconfont} ${styles["icon-tuihuobaozhang"]}`}></div>
      <div className={`${styles.iconfont} ${styles["icon-huodongyouxian"]}`}></div>
      <div className={`${styles.iconfont} ${styles["icon-tianmaopaidui"]}`}></div>
    </>
  );
}
