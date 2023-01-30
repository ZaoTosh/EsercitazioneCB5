import { useRouteError } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h1>Siamo Spiacenti</h1>
      <p>La pagina richiesta non esiste!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
