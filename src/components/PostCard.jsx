/* eslint-disable react/prop-types */

import appwriteService from "../appwrite/configuration";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-72 flex flex-col gap-3 items-center justify-center bg-slate-400 rounded-xl hover:scale-110 duration-500">
        <div>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-44 h-44 p-3"
          />
        </div>
        <h2 className="text-lg md:text-2xl uppercase text-black font-bold p-1 md:p-3">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
