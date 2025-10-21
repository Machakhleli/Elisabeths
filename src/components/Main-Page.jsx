import mainPhoto from "../assets/main-photo.jpg";

export default function MainPage() {
  return (
    <section className="relative w-full h-full flex justify-end ">
      <div className=" absolute top-24 left-28 z-10 w-[40%] h-[70vh] bg-white  flex flex-col justify-center items-center gap-8 ">
        <span>Elisabeth GogoliSvili</span>
        <h1>PHOTOGRAPHY STUDIO</h1>
        <button className=" w-[6.25rem] cursor-pointer border-b-2 border-black hover:text-gray-500 transition-colors duration-300">
          Book Now
        </button>
      </div>
      <div className="w-[65%] h-full">
        <img
          src={mainPhoto}
          alt="Photography of photographer"
          className="w-full h-[100vh] object-cover "
        />
      </div>
    </section>
  );
}
