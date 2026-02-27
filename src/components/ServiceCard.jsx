import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service, onBook }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-5xl">
        {/* IMAGE: Clicking this opens the relevant portfolio album */}
        <div
          className="relative w-full lg:w-3/5 aspect-4/5 lg:aspect-auto h-350px md:h-500px lg:h-35rem overflow-hidden cursor-pointer group"
          onClick={() => navigate(service.path)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
          />

          {/* Hover Overlay with Hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
            <span
              className="opacity-0 group-hover:opacity-100 text-white border border-white px-6 py-2 uppercase tracking-[0.3em]
             text-[10px] backdrop-blur-sm transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              View Gallery
            </span>
          </div>
        </div>

        {/* CONTENT CARD */}
        <div
          className="
          z-10 -mt-16 w-[90%] bg-white p-8 flex flex-col gap-6 shadow-2xl
          md:w-[55%] md:p-12 md:-mt-24
          lg:absolute lg:right-0 lg:mt-60 lg:w-[45%] lg:p-10 lg:translate-x-[10%]
          xl:w-400px xl:translate-x-[20%]
        "
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-light text-black uppercase leading-tight font-display italic">
            {service.title}
          </h2>

          <hr className="w-full border-t border-black/10" />

          <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-[10px] md:text-xs font-semibold">
            <div className="flex justify-between lg:flex-col lg:gap-2">
              <span className="opacity-50">Duration</span>
              <span>{service.duration}</span>
            </div>
            <div className="flex justify-between lg:flex-col lg:gap-2 mt-2 lg:mt-0">
              <span className="opacity-50">Investment</span>
              <span>{service.price}</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Critical: prevents navigating to portfolio
              onBook();
            }}
            className="border border-black py-4 px-10 uppercase text-[10px] text-black tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
