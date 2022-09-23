import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const LOGOUT_URL = "/logout";

  const logout = () => {
    console.log("LOGGING OUT");
    axios
      .get(LOGOUT_URL, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(() => {
        setAuth({});
        navigate("/linkpage");
        console.log("LOGGed");
      });
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button className="btn btn-primary mt-3" onClick={logout}>
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default Home;
