import Image from "next/image";
import React from "react";
import CreatePost from "../components/Dashboard/CreatePost";
import Discover from "../components/Dashboard/Discover";
import Nav from "../components/Dashboard/Nav";
import News from "../components/Dashboard/News";
import ProfileBox from "../components/Dashboard/ProfileBox";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Nav />
      <div className="w-screen lg:h-[calc(100vh-70px)] bg-gray-100 ">
        <div className="grid w-[90%] max-w-[75rem] mx-auto grid-cols-1 lg:grid-cols-10 h-full gap-x-5  pt-3 ">
          <div className="flex flex-col gap-5 lg:col-span-2    h-full ">
            <ProfileBox name={"Yash Bajaj"} email={"bajajy82@gmail.com"} />
            <Discover className="hidden lg:flex" />
          </div>
          <div className="lg:col-span-5  h-full  ">
            <CreatePost />
          </div>
          <div className="lg:col-span-3 ">
            <News />
            <div className="bg-white rounded-lg w-full h-auto px-3 mt-3 ">
              <Image
                src={"/Dashboard-Promo-Image.jpg"}
                alt="promoImage"
                width={350}
                height={250}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
