import Image from "next/image";
import star from "@/public/star.svg";
import corner from "@/public/corner.svg";

const Third = () => {
  return (
    <div>
      <div>
        <div className="relative right-2 w-full flex top-[900px] justify-end  ">
          <div className="shape-purple-diamond  "></div>
        </div>
        <div className="h-0 ">
          <div className="shape-orange-blob"></div>
        </div>

        <div className="h-0 flex w-full justify-end ">
          <div className="top-24 right-48 relative ">
            <Image src={corner} alt="corner" width={140} height={140} />
          </div>
        </div>
        <div className="min-h-screen bg-black grid items-center text-white justify-center text-center  ">
          <div className="bg-[#f1c84b]  min-h-[701px] my-40 text-center flex  px-64  flex-col items-center justify-center w-[1000px] rounded-3xl">
            <h1 className="text-6xl text-black font-extrabold">
              Not just another networking site
            </h1>
            <div className="text-xl my-10 flex flex-col text-[#333333] ">
              <span>The new professional network for flexible work.</span>
              <span>Build your career around the life you want.</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#f8e2a0] flex items-center  rounded-3xl max-w-xl mx-auto ">
                <input
                  type="text"
                  placeholder="iwant@contra.com"
                  className="bg-yellow-140 outline-none text-black bg-transparent pr-16 pl-8 placeholder-gray-700 mr-4"
                />
                <button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-4 py-3 font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center  w-full h-0 ">
        <Image src={star} alt="star" className="z-20" />
      </div>
      
      </div>
    </div>
  );
};

export default Third;
