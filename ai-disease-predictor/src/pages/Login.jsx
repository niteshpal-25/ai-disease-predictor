import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const handleLogin =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        const result =
          await loginUser({
            email,
            password,
          });

        localStorage.setItem(
          "token",
          result.access_token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            result.user
          )
        );

        alert(
          "Login Successful"
        );

        navigate("/");
      } catch (error) {
        alert(
          error.response?.data
            ?.detail ||
            "Login Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form
          onSubmit={
            handleLogin
          }
          className="space-y-4"
        >

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
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
              value={
                password
              }
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
              className="w-full border rounded-lg p-3"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p className="text-center mt-4">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;