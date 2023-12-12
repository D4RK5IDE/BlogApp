import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import styles from "./blog.module.css";

function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage;
