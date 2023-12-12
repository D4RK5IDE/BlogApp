"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

function LoginPage() {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </button>
        <button className={styles.socialButton}>Sign in with Gighub</button>
        <button className={styles.socialButton}>Sign in with Facebook</button>
      </div>
    </div>
  );
}

export default LoginPage;
