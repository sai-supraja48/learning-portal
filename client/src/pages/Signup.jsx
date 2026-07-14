import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await api.post("/auth/register", form);

      toast.success("Registration Successful");

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <div className="card shadow">
        <div className="card-body">

          <h2 className="text-center mb-4">
            Signup
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />

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

            <button className="btn btn-success w-100">
              Signup
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?
            <Link to="/"> Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;