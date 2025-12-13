import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() =>
          navigate(user.role === "ADMIN" ? "/admin" : "/dashboard")
        }
      >
        🍬 Sweet Shop
      </h1>

      <div className="flex items-center gap-4">
        {user.role === "ADMIN" && (
          <button
            onClick={() => navigate("/admin")}
            className="text-indigo-600 font-medium"
          >
            Admin Panel
          </button>
        )}

        <span className="text-sm text-gray-600">{user.email}</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
