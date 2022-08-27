import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../components/Dashboard/CreatePost";
import CreatePostModal from "../components/Dashboard/CreatePostModal";
import Discover from "../components/Dashboard/Discover";
import Nav from "../components/Dashboard/Nav";
import News from "../components/Dashboard/News";
import ProfileBox from "../components/Dashboard/ProfileBox";
import axios from "axios";
import Post from "../components/Dashboard/Post";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [posts, setPosts] = useState([]);
  const { state } = useContext(AuthContext);
  const router = useRouter();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const fetchPosts = async () => {
    const res = await axios.get("/api/posts");
    const data = await res.data;
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!state.token) {
      router.push("/register");
    }
  }, [state.token, router]);

  if (!state.token) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Dashboard | LinkedIn Clone</title>
        <link rel="icon" href="/linkedin-icon.svg"></link>
      </Head>
      {isModalOpen && (
        <CreatePostModal fetchPosts={fetchPosts} onCloseModal={toggleModal} />
      )}
      <Nav />
      <div className="w-screen lg:h-[calc(100vh-70px)] bg-gray-100 dark:bg-black ">
        <div className="grid w-[90%] max-w-[75rem] mx-auto grid-cols-1 lg:grid-cols-10 h-full gap-x-5  pt-3 ">
          <div className="flex flex-col gap-5 lg:col-span-2    h-full ">
            <ProfileBox name={state.name} email={state.email} />
            <Discover className="hidden lg:flex" />
          </div>
          <div className="lg:col-span-5  h-full overflow-auto scrollbar-hide ">
            <CreatePost onNewPost={toggleModal} />
            <div className="flex flex-col gap-5 my-5">
              {posts &&
                posts.map((post) => (
                  <Post
                    key={post._id}
                    message={post.message}
                    userId={post.userId}
                    imageURL={post.imageURL}
                  />
                ))}
            </div>
          </div>
          <div className="lg:col-span-3 ">
            <News />
            <div className="bg-white dark:bg-darkBg rounded-lg w-full h-auto px-3 mt-3 ">
              <Image
                src={"/Dashboard-Promo-Image.jpg"}
                alt="promoImage"
                width={350}
                height={250}
                layout="responsive"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
