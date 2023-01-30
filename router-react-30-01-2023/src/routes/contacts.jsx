import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

export default function Contact() {
  const [dateUser, setDateUser] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setDateUser(data.users));
  }, []);

  return (
    <div>
      {dateUser.map((data) => (
        <div className={styles.main}>
          <div className={styles.container}>
            <p>{data.lastName}</p>
            <h2> {data.firstName} </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
