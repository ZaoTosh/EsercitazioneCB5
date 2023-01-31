import styles from "./app.module.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <h1>Accedi a tutti i tuoi contatti</h1>
      <ul>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/contacts/1">Single Contact</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/1">Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
