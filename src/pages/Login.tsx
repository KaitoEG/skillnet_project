// src/pages/Login.tsx
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página de Login (Temporal)</h1>
      <Link to="/home">
        <button style={{ fontSize: "18px", padding: "10px 20px", marginTop: "20px" }}>
          Ir a Home
        </button>
      </Link>
    </div>
  );
}

export default Login;
