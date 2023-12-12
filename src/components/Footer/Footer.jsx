import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>NextBlog</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem officia illo,
          repellendus architecto, voluptate, consequatur omnis eum ullam incidunt voluptatem
          reiciendis culpa commodi totam autem facere iusto! Aperiam, enim obcaecati!
        </div>
        <div className={styles.icons}>
          <Image src="/images/facebook.png" alt="Facebook" width="18" height="18" />
          <Image src="/images/instagram.png" alt="Instagram" width="18" height="18" />
          <Image src="/images/tiktok.png" alt="TikTok" width="18" height="18" />
          <Image src="/images/youtube.png" alt="Youtube" width="18" height="18" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <div className={styles.listTitle}>Links</div>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Tags</div>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>Social</div>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
