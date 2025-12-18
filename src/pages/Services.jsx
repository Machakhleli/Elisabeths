import portraitMain from "../assets/Sh.m.png";
import familyMain from "../assets/family.png";
import maternityMain from "../assets/maternity.jpg";
import commercialMain from "../assets/commercial.png";

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Portraits",
      image: portraitMain,
      duration: "3 hours",
      price: "Price Varies",
    },
    {
      id: 1,
      title: "Family",
      image: familyMain,
      duration: "3 hours",
      price: "Price Varies",
    },
    {
      id: 1,
      title: "Maternity",
      image: maternityMain,
      duration: "3 hours",
      price: "Price Varies",
    },
    {
      id: 1,
      title: "Commertial",
      image: commercialMain,
      duration: "3 hours",
      price: "Price Varies",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[90rem] min-h-screen flex flex-col items-center gap-20 lg:gap-60 p-6 md:p-10 bg-black">
      <h1 className="text-white text-center text-5xl md:text-7xl mt-10 lg:mb-20 tracking-widest font-light">
        SERVICES
      </h1>
      {serviceList.map((service, index) => (
        <div
          key={service.id}
          className="w-full flex flex-col items-center justify-center"
        >
          {/* Main Container: Relative on Desktop, Static on Mobile */}
          <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-5xl">
            {/* 1. Image Container: Full width on mobile, 60% on desktop */}
            <div className="w-full lg:w-3/5 aspect-[4/5] lg:aspect-auto h-[300px] md:h-[500px] lg:h-[35rem] overflow-hidden">
              <img
                src={service.image}
                alt={`${service.title} section`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              />
            </div>
            <div
              className="
              relative z-10 
              -mt-12 lg:mt-0 
              lg:absolute lg:right-[-5%] 
              w-[90%] md:w-[70%] lg:w-[28rem] 
              bg-white p-8 md:p-12 lg:p-16 
              flex flex-col justify-center items-start gap-6 lg:gap-8 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light hover:text-gray-500 cursor-pointer transition-colors text-black">
                {service.title}
              </h2>
              <hr className="w-full border-t border-black opacity-30" />
              <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-xs md:text-sm font-semibold">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>
              <button className="border border-black py-2 px-8 cursor-pointer w-fit uppercase text-[10px] md:text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>

    // <section className="mx-auto w-full max-w-[90rem] min-h-screen flex flex-col gap-60 p-10">
    //   <h1 className="text-white text-center text-7xl mb-20">SERVICES</h1>
    //   {serviceList.map((service) => (
    //     <div
    //       key={service.id}
    //       className="w-full flex flex-col items-center justify-center mb-40"
    //     >
    //       <div className="relative flex justify-center items-center w-full max-w-5xl h-[25rem]">
    //         <div className="w-1/2 overflow-hidden">
    //           <img
    //             src={service.image}
    //             alt={`${service.title} section`}
    //             className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
    //           />
    //         </div>

    //         <div className="absolute right-0 lg:-right-25 w-[28rem] h-[23rem] bg-white flex flex-col justify-center items-start p-16 gap-8 shadow-2xl">
    //           <h2 className="text-5xl font-light hover:text-gray-500 cursor-pointer transition-colors">
    //             {service.title}
    //           </h2>

    //           <hr className="w-full border-t border-black opacity-30" />

    //           <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-sm font-semibold">
    //             <span>{service.duration}</span>
    //             <span>{service.price}</span>
    //           </div>

    //           <button className="border border-black py-2 px-8 cursor-pointer w-fit uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
    //             Book Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </section>
  );
}
