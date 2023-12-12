"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import styles from "./write.module.css";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function WritePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  function slugify(str) {
    const slug = str.toLowerCase().split(" ").join("-");
    return slug;
  }

  useEffect(() => {
    async function uploadImage() {
      if (!file) return;

      const formData = new FormData();
      formData.set("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setImage(data.path);
    }
    uploadImage();
  }, [file]);

  async function handleSubmit() {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: text,
        image,
        slug: slugify(title),
        categorySlug: "fashion",
      }),
    });
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          <Image src="/images/plus.png" alt="add" width={16} height={16} />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              style={{ display: "none" }}
              accept="image/*"
            />

            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/images/image.png" alt="add" width={16} height={16} />
              </label>
            </button>

            <button className={styles.addButton}>
              <Image src="/images/external.png" alt="add" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/images/video.png" alt="add" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={text}
          onChange={setText}
          placeholder="Tell your story..."
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}

export default WritePage;
