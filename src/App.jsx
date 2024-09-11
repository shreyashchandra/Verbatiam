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
    <div className="text-blue-100 flex flex-col gap-52 lg:gap-10 ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <>
      <Loader />
    </>
  );
}

export default App;
