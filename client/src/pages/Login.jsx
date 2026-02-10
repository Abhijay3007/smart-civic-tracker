import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
