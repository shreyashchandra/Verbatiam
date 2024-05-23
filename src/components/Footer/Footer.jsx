import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-5  shadow-slate-100 shadow-sm">
      <h1 className="text-sm">
        Design and Built By{" "}
        <Link className="font-bold hover:text-sky-300" to="/">
          @shreyashchandra
        </Link>
      </h1>
      <footer>
        <ul className="flex text-xs font-semibold gap-4 items-center mt-3 ">
          <li>
            <Link className="hover:text-green-300" to="/">
              Twitter
            </Link>
          </li>

          <li>
            <Link className="hover:text-green-300" to="/">
              Instagram
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
