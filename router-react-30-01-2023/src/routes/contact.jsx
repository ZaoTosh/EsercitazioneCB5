import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../utils/http";
import styles from "./styles.module.scss";
export default function Contact() {
  const params = useParams();

  const [userDate, setUserData] = useState({});
  const endpoint = "users";
  useEffect(() => {
    GET(endpoint, params.contactID).then((data) => setUserData(data));
  }, []);
  return (
    <div className={styles.main__single_card}>
      <div className={styles.card}>
        {userDate.id ? (
          <>
            <h1>{userDate.id}</h1>
            <div className={styles.first_last_name}>
              <p>
                {userDate.firstName} {userDate.lastName}
              </p>
            </div>
          </>
        ) : (
          <span className={styles.loader}></span>
        )}
      </div>
    </div>
  );
}
