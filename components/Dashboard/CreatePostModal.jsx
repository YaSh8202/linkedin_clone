import React from "react";
import { IoClose } from "react-icons/io5";
import UserIcon from "../UserIcon";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import jwt from "jsonwebtoken";

const getId = (token) => {
  const { userId } = jwt.decode(token);
  return userId;
};

const CreatePostModal = ({ onCloseModal, fetchPosts }) => {
  const [message, setMessage] = React.useState("");
  const [image, setImage] = React.useState("");

  const { state } = React.useContext(AuthContext);

  const submitHandler = async () => {
    const userId = getId(state.token);
    const res = await axios.post("/api/post", {
      userId: userId,
      message: message,
      imageURL: image,
    });

    const data = await res.data;
    onCloseModal();
    fetchPosts();
  };

  return (
    <div className="  z-10 fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex items-center justify-center">
      <div className=" rounded-lg w-[35rem] flex flex-col  justify-between dark:bg-darkBg bg-white py-5 h-[18rem] ">
        <div className="flex flex-row items-center justify-between border-b border-gray-500 dark:border-gray-300 px-3 pb-2 ">
          <h3 className="text-2xl text-gray-700 dark:text-gray-100  ">
            Create a Post
          </h3>
          <button onClick={onCloseModal} className="">
            <IoClose size={30} className="text-gray-500 dark:text-gray-300" />
          </button>
        </div>
        <div className="flex flex-col px-3">
          <div className="flex flex-row items-center">
            <UserIcon size={30} />
            <p className="text-lg ml-3 font-medium text-gray-800 dark:text-gray-100 dar ">
              {state.name}
            </p>
          </div>
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" bg-transparent text-gray-800 dark:text-gray-100 placeholder:text-gray-400 w-full outline-none focus:outline-none h-16 mt-3 "
              placeholder="What do you want to talk about?"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-3">
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className=" bg-transparent text-gray-800 dark:text-gray-100 placeholder:text-gray-400 flex-1 outline-none "
            placeholder="Add a photo URL (optional)"
          />
          <button
            onClick={submitHandler}
            className="dark:text-gray-100 text-gray-500"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
