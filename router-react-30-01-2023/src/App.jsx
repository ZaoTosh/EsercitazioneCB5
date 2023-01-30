import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Accedi a tutti i tuoi contatti</h1>
      <Link to="/contacts">Vai a contatti</Link>
    </div>
  );
}

export default App;
