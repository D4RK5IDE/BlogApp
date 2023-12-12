import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

function Card({ post, key }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={post.image} fill alt="blog post" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString("en-GB")} -{" "}
          </span>
          <span className={styles.tag}>{post.categorySlug}</span>
        </div>
        <div className={styles.title}>{post.title}</div>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
