import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

function MenuPosts({ withImage }) {
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.travel}`}>Travel</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.fashion}`}>Fashion</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.food}`}>Food</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.culture}`}>Culture</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.style}`}>Style</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
      <div className={styles.post}>
        {withImage && (
          <Link href="/" className={styles.imageContaier}>
            <Image src="/images/p1.jpeg" fill alt="post" className={styles.image} />
          </Link>
        )}
        <div className={styles.textContainer}>
          <div className={`${styles.category} ${styles.coding}`}>coding</div>
          <Link href="/" className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Link>
          <div className={styles.detail}>
            <span className={styles.userName}>Jonh Doe</span>
            <span className={styles.date}> - 10.12.2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPosts;
