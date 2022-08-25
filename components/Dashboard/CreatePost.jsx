import React from "react";
import UserIcon from "../UserIcon";
import { HiPhotograph } from "react-icons/hi";
import { MdVideoCameraBack } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { MdArticle } from "react-icons/md";

const CreatePost = ({ onNewPost }) => {
  return (
    <div
      onClick={onNewPost}
      className=" cursor-pointer rounded-lg px-4 py-3 bg-white "
    >
      <div className="flex flex-row gap-3.5 items-center ">
        <UserIcon size={35} />
        <div className="rounded-full font-semibold text-lg border-gray-400 border px-4 py-3 flex-1 text-gray-800 ">
          Start a Post
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-5 mx-auto w-4/5 mt-4">
        <div className="flex flex-row items-center gap-2">
          <HiPhotograph className="text-blue-400" size={30} />
          <p>Photo</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdVideoCameraBack className="text-green-400" size={30} />
          <p>Video</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <IoBriefcase className="text-blue-300" size={30} />
          <p>Job</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdArticle className="text-red-400" size={30} />
          <p>Write Article</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
