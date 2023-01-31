import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
const PostList = ({ postDate }) => {
  const navigate = useNavigate();

  const { id, title, body } = postDate;
  const onClickSingleList = () => navigate(`/posts/${id}`);
  return (
    <div onClick={() => navigate(`/posts/${id}`)} className={styles.main}>
      <div className={styles.post}>{title}</div>
    </div>
  );
};
export default PostList;
