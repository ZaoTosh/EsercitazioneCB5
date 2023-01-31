import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
const UserCard = ({ userDate }) => {
  const navigate = useNavigate();

  const { id, firstName, lastName } = userDate;
  const onClickSingleCard = () => navigate(`/contacts/${id}`);
  return (
    <div onClick={() => navigate(`/contacts/${id}`)} className={styles.main}>
      <div className={styles.userCard}>
        <h1>{id}</h1>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </div>
  );
};
export default UserCard;
