import Image from "next/image";
import styles from "./featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey Jonas here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/images/p1.jpeg" alt="post image" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure vitae dicta
            aliquam dolores id sapiente, quaerat perferendis? Voluptates odio provident, eum
            excepturi ullam neque libero nisi dignissimos quibusdam blanditiis.
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
