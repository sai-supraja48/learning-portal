import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            Login
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <button className="btn btn-primary w-100">
              Login
            </button>

          </form>

          <p className="text-center mt-3">
            New User?
            <Link to="/signup"> Signup</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;