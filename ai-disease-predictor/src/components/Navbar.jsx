import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="font-bold text-xl">
          AI Disease Predictor
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="hover:text-blue-200"
          >
            Home
          </Link>

          <Link
            to="/predictor"
            className="hover:text-blue-200"
          >
            Predict
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-200"
          >
            History
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-200"
          >
            About
          </Link>

          {token ? (
            <>
              <span className="hidden md:block text-sm">
                Welcome, {user?.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;