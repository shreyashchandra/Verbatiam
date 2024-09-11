import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      window.refresh();
    });
  };

  return (
    <div>
      <button
        onClick={logoutHandler}
        className=" rounded-[100%] bg-sky-100 hover:bg-green-300  p-2  cursor-pointer "
      >
        <img src="/logout-svg.svg" alt="logout" className="w-6" />
      </button>
    </div>
  );
};

export default LogoutBtn;
