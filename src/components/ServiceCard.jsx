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

        <div className="relative z-10 mt-12 lg:mt-80 lg:absolute lg:right-[-5%] w-[70%] md:w-[50%] lg:w-28rem bg-white p-8 md:p-12 lg:p-16 flex flex-col gap-6 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-light text-black uppercase">
            {service.title}
          </h2>
          <hr className="w-full border-t border-black opacity-30" />
          <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-xs font-semibold">
            <span>{service.duration}</span>
            <span>{service.price}</span>
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
