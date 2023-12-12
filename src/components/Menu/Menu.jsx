import Image from "next/image";
import Link from "next/link";
import MenuCategories from "../MenuCategories/MenuCategories";
import MenuPosts from "../MenuPosts/MenuPosts";
import styles from "./menu.module.css";

function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>{"What's hot"}</div>
      <div className={styles.title}>Most Popular</div>
      <MenuPosts withImage={false} />

      <div className={styles.subtitle}>Discover by topic</div>
      <div className={styles.title}>Categories</div>
      <MenuCategories />

      <div className={styles.subtitle}>Choosen by editor</div>
      <div className={styles.title}>Editors Pick</div>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
