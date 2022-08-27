import React, { useEffect } from "react";
import UserIcon from "../UserIcon";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { CgComment } from "react-icons/cg";
import Image from "next/image";
import axios from "axios";

const Post = ({ message, userId, imageURL }) => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/getuser", {
        params: {
          userId,
        },
      });
      setUserName(res.data.name);
      setEmail(res.data.email);
    };
    fetchUser();
  });

  return (
    <div className="py-3 px-4 rounded-xl flex flex-col bg-white dark:bg-darkBg gap-3 ">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <UserIcon size={35} />
          <div className="flex flex-col justify-start ">
            <h3 className="text-lg dark:text-gray-200 font-medium text-gray-800 capitalize ">
              {userName}
            </h3>
            <p className="dark:text-gray-400 text-gray-600 ">{email}</p>
          </div>
        </div>
        <div>
          <BsThreeDots size={25} className="text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg dark:text-gray-100 text-gray-900">{message}</p>
        {imageURL && (
          // <div className="w-auto mx-auto h-[180px] mt-5">
          <Image
            alt="PostImage"
            src={imageURL}
            className="rounded"
            height={400}
            width={600}
            layout="responsive"
          />
          // </div>
        )}
      </div>

      <div className="flex w-full flex-row justify-evenly items-center mt-2 ">
        <div className="flex flex-row items-center gap-2 ">
          <BiLike size={28} className="text-gray-600 dark:text-gray-300 " />
          <p className="text-gray-600 dark:text-gray-300 ">Like</p>
        </div>
        <div className="flex flex-row items-center gap-2 ">
          <CgComment size={28} className="text-gray-600 dark:text-gray-300" />
          <p className="text-gray-600 dark:text-gray-300 ">Comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
