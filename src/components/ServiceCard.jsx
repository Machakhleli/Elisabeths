export default function ServiceCard({ service, onBook }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-5xl">
        <div
          className="w-full lg:w-3/5 aspect-4/5 lg:aspect-auto h-350px md:h-500px lg:h-35rem overflow-hidden cursor-pointer"
          onClick={onBook}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          />
        </div>

        <div
          className="
          /* Mobile: Negative margin pulls it UP over the image slightly */
          z-10 -mt-16 w-[90%] bg-white p-8 flex flex-col gap-6 shadow-2xl
          
          /* Tablet: Wider card, more padding */
          md:w-[55%] md:p-12 md:-mt-24
          
          /* Desktop: Absolute positioning, centered vertically on the right edge */
          lg:absolute lg:right-0 lg:mt-80 lg:w-[45%] lg:p-6 lg:translate-x-[10%]
          
          /* Ultra Wide: Lock the width so it doesn't get too big */
          xl:w-400px xl:translate-x-[20%]
        "
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-light text-black uppercase leading-tight">
            {service.title}
          </h2>

          <hr className="w-full border-t border-black/20" />

          <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-[10px] md:text-xs font-semibold">
            <div className="flex justify-between lg:flex-col lg:gap-2">
              <span className="opacity-60 lg:opacity-100">Duration</span>
              <span>{service.duration}</span>
            </div>
            <div className="flex justify-between lg:flex-col lg:gap-2 mt-2 lg:mt-0">
              <span className="opacity-60 lg:opacity-100">Investment</span>
              <span>{service.price}</span>
            </div>
          </div>
          <button
            onClick={onBook}
            className="border border-black py-3 px-10 uppercase text-xs text-black tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
