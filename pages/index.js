import HomeElement from "../components/HomeElement";
import Navbar from "../components/Navbar";
import Image from "next/image";
// import requireAuth from "../middlewares/requireAuth";

function Home() {
  return (
    <div className="h-screen flex flex-col overflow-y-hidden py-4 bg-background  ">
      <Navbar />
      <div className="flex md:self-end md:w-[93%]  mt-9 flex-col  md:flex-row md:justify-between ">
        <div className="flex md:w-[50%] md:justify-start md:mt-12  flex-col ">
          <h2 className="text-left leading-10  mb-2 text-[1.8rem] md:text-5xl lg:text-[60px]  ml-4 md:mb-10 md:leading-[4rem] lg:leading-[5rem]  text-brown ">
            Welcome to your professional community
          </h2>
          <div className=" flex mt-4 flex-col gap-4 md:gap-5 md:max-w-[32rem] ">
            <HomeElement text={"Search for a job"} />
            <HomeElement text={"Find a person you know"} />
            <HomeElement text={"Learn a new skill"} />
          </div>
        </div>
        <div className="w-[90%] mx-auto  md:w-1/2 md:justify-self-end ">
          <Image
            layout="responsive"
            height={800}
            width={800}
            src="/Landing-Page-Stock-Image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
