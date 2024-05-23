import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, Loader } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
    setLoading(false);
  }, []);

  return !loading ? (
    <div className="w-full min-h-screen flex flex-wrap content-between bg-slate-900 text-blue-100">
      <div className="w-full block relative">
        <NavBar />
        <main className="flex items-center justify-center h-1/2">
          <Outlet />
        </main>
        <div className=" absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <>
      <Loader />
    </>
  );
}

export default App;
