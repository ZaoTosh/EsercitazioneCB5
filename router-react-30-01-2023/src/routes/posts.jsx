import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import PostList from "./../Components/PostList";
import { GET } from "../utils/http";
export default function Post() {
  const [postDate, setPostDate] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((date) => setPostDate(date.posts));
  }, []);

  return (
    <div>
      {postDate.map((date, index) => (
        <PostList postDate={date} key={date.id} />
      ))}
    </div>
  );
}
