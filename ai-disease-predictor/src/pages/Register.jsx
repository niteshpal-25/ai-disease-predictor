import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result =
        await registerUser(
          formData
        );

      alert(result.message);

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.detail ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>
            <label className="block mb-1 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            {loading
              ? "Registering..."
              : "Register"}
          </button>

        </form>

        <p className="text-center mt-4">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;