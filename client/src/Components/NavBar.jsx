import { Link } from "react-router-dom";
import { useStoreAuth } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const NavBar = () => {
  const { logout, authUser, showNavBar } = useStoreAuth();

  return showNavBar ? (
    <header
      className="bg-gray-900 border-b border-gray-700 fixed w-full top-0 z-40 
    backdrop-blur-lg shadow-lg"
      style={{ backgroundColor: "#E9F1FA", borderColor: "#CDDEEF" }}
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div
                className="size-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#00ABE4" }}
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold" style={{ color: "#333333" }}>
                Chit Chat
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 
              px-4 py-2 rounded-lg gap-2 transition-all duration-200 flex items-center
              hover:shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#333333",
                borderColor: "#CDDEEF",
              }}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser ? (
              <>
                <Link
                  to={"/profile"}
                  className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 
                px-4 py-2 rounded-lg gap-2 transition-all duration-200 flex items-center
                hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#333333",
                    borderColor: "#CDDEEF",
                  }}
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="bg-red-600 hover:bg-red-700 text-white border border-red-500
                px-4 py-2 rounded-lg gap-2 transition-all duration-200 flex items-center
                hover:shadow-lg"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 
                px-4 py-2 rounded-lg gap-2 transition-all duration-200 flex items-center
                hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#333333",
                    borderColor: "#CDDEEF",
                  }}
                >
                  <span className="hidden sm:inline">Sign Up</span>
                </Link>
                <Link
                  to={"/login"}
                  className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 
                px-4 py-2 rounded-lg gap-2 transition-all duration-200 flex items-center
                hover:shadow-lg font-medium"
                  style={{ backgroundColor: "#00ABE4", borderColor: "#0089B6" }}
                >
                  <span className="hidden sm:inline">Login</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  ) : (
    <></>
  );
};
export default NavBar;
