import getData from "@/utils/getData";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import styles from "./cardList.module.css";

async function CardList({ page, cat }) {
  const { posts, count } = await getData(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
  );
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent Posts</div>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
}

export default CardList;
