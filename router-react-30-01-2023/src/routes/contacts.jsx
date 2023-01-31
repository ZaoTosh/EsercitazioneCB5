import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import UserCard from "./../Components/UserCard";
import { GET } from "../utils/http";
export default function Contact() {
  const [userDate, setUserDate] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((date) => setUserDate(date.users));
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          {userDate.map((date, index) => (
            <UserCard userDate={date} key={date.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
