import Comments from "@/components/Comments/Comments";
import Menu from "@/components/Menu/Menu";
import getData from "@/utils/getData";
import Image from "next/image";
import styles from "./singlePage.module.css";

async function SinglePage({ params }) {
  const { slug } = params;
  const post = await getData(`http://localhost:3000/api/posts/${slug}`);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src="/images/p1.jpeg" fill alt="post" className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>{post?.user?.name}</span>
              <span className={styles.date}>
                {" "}
                - {new Date(post.createdAt).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>
        </div>
        {post?.image && (
          <div className={styles.imageContainer}>
            <Image src={post.image} fill alt="post" className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.description }}
          />
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
