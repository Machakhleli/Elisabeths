import portraitMain from "../assets/Sh.m.png";
import familyMain from "../assets/family.png";

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[90rem] min-h-screen flex flex-col gap-60 p-10">
      <h1 className="text-white text-center text-7xl mb-20">SERVICES</h1>
      <div className="w-full flex flex-col items-center justify-center pb-60">
        <div className="relative flex justify-center items-center  w-full h-[18.75rem]">
          <img
            src={portraitMain}
            alt="portrait sections main photo"
            className="hover:cursor-pointer"
          />
          <div className="absolute right-10 w-[28rem] h-[23rem] bg-white flex flex-col justify-center items-left p-15 gap-8">
            <h2 className="text-5xl hover:text-gray-500 cursor-pointer decoration-1">
              Portraits
            </h2>
            <hr />
            <div className=" flex flex-col  gap-3 text-black">
              <span>3 hr</span>
              <span> Price Varies</span>
            </div>
            <button className="border border-black p-1 cursor-pointer w-[7rem] hover:underline">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-60">
        <div className="relative flex justify-center items-center  w-full h-[18.75rem]">
          <img
            src={familyMain}
            alt="portrait sections main photo"
            className="hover:cursor-pointer"
          />
          <div className="absolute right-10 w-[28rem] h-[23rem] bg-white flex flex-col justify-center items-left p-15 gap-8">
            <h2 className="text-5xl hover:text-gray-500 cursor-pointer decoration-1">
              Portraits
            </h2>
            <hr />
            <div className=" flex flex-col  gap-3 text-black">
              <span>3 hr</span>
              <span> Price Varies</span>
            </div>
            <button className="border border-black p-1 cursor-pointer w-[7rem] hover:underline">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-60">
        <div className="relative flex justify-center items-center  w-full h-[18.75rem]">
          <img
            src={portraitMain}
            alt="portrait sections main photo"
            className="hover:cursor-pointer"
          />
          <div className="absolute right-10 w-[28rem] h-[23rem] bg-white flex flex-col justify-center items-left p-15 gap-8">
            <h2 className="text-5xl hover:text-gray-500 cursor-pointer decoration-1">
              Portraits
            </h2>
            <hr />
            <div className=" flex flex-col  gap-3 text-black">
              <span>3 hr</span>
              <span> Price Varies</span>
            </div>
            <button className="border border-black p-1 cursor-pointer w-[7rem] hover:underline">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pb-60">
        <div className="relative flex justify-center items-center  w-full h-[18.75rem]">
          <img
            src={portraitMain}
            alt="portrait sections main photo"
            className="hover:cursor-pointer"
          />
          <div className="absolute right-10 w-[28rem] h-[23rem] bg-white flex flex-col justify-center items-left p-15 gap-8">
            <h2 className="text-5xl hover:text-gray-500 cursor-pointer decoration-1">
              Portraits
            </h2>
            <hr />
            <div className=" flex flex-col  gap-3 text-black">
              <span>3 hr</span>
              <span> Price Varies</span>
            </div>
            <button className="border border-black p-1 cursor-pointer w-[7rem] hover:underline">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
