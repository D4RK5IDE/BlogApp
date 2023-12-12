import getData from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

async function CategoryList() {
  const categories = await getData("http://localhost:3000/api/categories");
  return (
    <div className={styles.container}>
      <div className={styles.title}>Popular categories</div>
      <div className={styles.categories}>
        {categories?.map((category) => (
          <Link
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
            key={category._id}
          >
            {category.image && (
              <Image
                src={category.image}
                alt={category.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
