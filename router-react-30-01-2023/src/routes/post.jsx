import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../utils/http";
export default function Post() {
  const [postDate, setPostDate] = useState({});
  const params = useParams();
  const enpoint = "posts";
  useEffect(() => {
    GET(enpoint, params.postID).then((date) => setPostDate(date));
  }, []);
  return (
    <div className={styles.main__single_post}>
      <div className={styles.main__container}>
        <div className={styles.post}>
          {postDate.id ? (
            <>
              <div className={styles.post_title_id}>
                <h1>{postDate.title}</h1>
                <h2>{postDate.id}</h2>
              </div>
              <div className={styles.post_body}>
                <p>{postDate.body}</p>
              </div>
            </>
          ) : (
            <span className={styles.loader}></span>
          )}
        </div>
      </div>
    </div>
  );
}
