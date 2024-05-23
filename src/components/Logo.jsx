/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center justify-center">
      <Link
        to="/"
        className="text-3xl font-semibold p-3 flex items-center cursor-pointer hover:text-green-100"
      >
        Verbatim{" "}
        <img src="/tree-brain.svg" alt="logo" className="w-10 invert " />{" "}
      </Link>
    </div>
  );
}

export default Logo;
