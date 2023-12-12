"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./comments.module.css";
import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = res.json();

  if (!res.ok) throw new Error(data.error);

  return data;
};

function Comments({ postSlug }) {
  const [desc, setDesc] = useState("");
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  async function handleSubmit() {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ description: desc, postSlug }),
    });
    mutate();
    setDesc("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.textarea}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to wraite a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  {comment.user?.image && (
                    <Image
                      src={comment.user.image}
                      width="50"
                      height="50"
                      alt="user"
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {new Date(comment.createdAt).toLocaleDateString("en-Gb")}
                    </span>
                  </div>
                </div>
                <div className={styles.text}>{comment.description}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Comments;
