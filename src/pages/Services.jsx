// import { useState } from "react";
// import portraitMain from "../assets/Sh.m.png";
// import familyMain from "../assets/family.png";
// import maternityMain from "../assets/maternity.jpg";
// import commercialMain from "../assets/commercial.png";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// export default function Services() {
//   const [booking, setBooking] = useState(null);

//   const [date, setDate] = useState(new Date()); //calendar

//   const serviceList = [
//     {
//       id: 1,
//       title: "Portraits",
//       image: portraitMain,
//       duration: "3 hours",
//       price: "Price Varies",
//     },
//     {
//       id: 2,
//       title: "Family",
//       image: familyMain,
//       duration: "3 hours",
//       price: "Price Varies",
//     },
//     {
//       id: 3,
//       title: "Maternity",
//       image: maternityMain,
//       duration: "3 hours",
//       price: "Price Varies",
//     },
//     {
//       id: 4,
//       title: "Commercial",
//       image: commercialMain,
//       duration: "3 hours",
//       price: "Price Varies",
//     },
//   ];

//   return (
//     <section className="mx-auto w-full max-w-[90rem] min-h-screen flex flex-col items-center gap-20 lg:gap-30 p-6 md:p-6 bg-black">
//       <h1 className="text-white text-center text-5xl md:text-7xl mt-10 lg:mb-10 tracking-widest font-light">
//         SERVICES
//       </h1>
//       {serviceList.map((service) => (
//         <div
//           key={`service-${service.id}`}
//           className="w-full flex flex-col items-center justify-center"
//         >
//           {/* Main Container: Relative on Desktop, Static on Mobile */}
//           <div className="relative flex flex-col lg:flex-row justify-center items-center w-full max-w-5xl">
//             {/* 1. Image Container: Full width on mobile, 60% on desktop */}
//             <div
//               className="w-full lg:w-3/5 aspect-[4/5] lg:aspect-auto h-[300px] md:h-[500px] lg:h-[35rem] overflow-hidden"
//               onClick={() => setBooking(service)}
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-auto object-cover hover:scale-90 transition-all duration-200 cursor-pointer"
//               />
//             </div>
//             <div
//               className="
//               relative z-10
//               -mt-12 lg:mt-0
//               lg:absolute lg:right-[-5%]
//               w-[90%] md:w-[70%] lg:w-[28rem]
//               bg-white p-8 md:p-12 lg:p-16
//               flex flex-col justify-center items-start gap-6 lg:gap-8 shadow-2xl"
//             >
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-light hover:text-gray-500 cursor-pointer transition-colors text-black">
//                 {service.title}
//               </h2>
//               <hr className="w-full border-t border-black opacity-30" />
//               <div className="flex flex-col gap-2 text-black uppercase tracking-widest text-xs md:text-sm font-semibold">
//                 <span>{service.duration}</span>
//                 <span>{service.price}</span>
//               </div>
//               <button
//                 className="border border-black py-2 px-8 cursor-pointer w-fit uppercase text-[10px] md:text-xs tracking-widest hover:bg-black hover:text-white transition-all"
//                 onClick={() => setBooking(service)}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       {booking && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
//           <div
//             className="absolute inset-0 bg-black/90 backdrop-blur-sm"
//             onClick={() => setBooking(null)}
//           />

//           <div className="relative bg-white w-full max-w-lg max-h-[95vh] overflow-y-auto p-5 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-6 scrollbar-hide">
//             <button
//               className="absolute top-4 right-4 text-black text-2xl hover:rotate-90 transition-transform cursor-pointer"
//               onClick={() => setBooking(null)}
//             >
//               ✕
//             </button>
//             <div className="text-center border-b pb-4">
//               <h3 className="text-xl md:text-2xl font-light tracking-widest text-black border-b pb-4">
//                 BOOKING: {booking.title.toUpperCase()}
//               </h3>
//             </div>
//             /* THE CALENDAR */
//             <div className="calendar-container flex flex-col items-center">
//               <Calendar
//                 onChange={setDate}
//                 value={date}
//                 minDate={new Date()} // Prevents booking in the past
//                 className="responsive-calendar"
//               />
//               <div className="mt-6 w-full p-4 bg-gray-50 text-center rounded-sm">
//                 <p className="text-[10px] uppercase tracking-widest text-gray-500">
//                   Selected Date
//                 </p>
//                 <p className="text-sm font-bold text-black">
//                   {date.toDateString()}
//                 </p>
//               </div>
//             </div>
//             <button
//               className="bg-black text-white py-4 px-6 uppercase text-xs tracking-widest hover:opacity-40 transition-all active:scale-95 cursor-pointer"
//               onClick={() => {
//                 alert(`Booking ${booking.title} for ${date.toDateString()}`);
//                 setBooking(null);
//               }}
//             >
//               Confirm Appointment
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import BookingModal from "../components/BookingModal";
import { serviceList } from "../data/services";

export default function Services() {
  const [booking, setBooking] = useState(null);
  const [date, setDate] = useState(new Date());

  return (
    <section className="mx-auto w-full max-w-[90rem] min-h-screen flex flex-col items-center gap-20 p-6 bg-black">
      <h1 className="text-white text-center text-5xl md:text-7xl mt-10 tracking-widest font-light uppercase">
        Services
      </h1>

      <div className="flex flex-col gap-32 w-full">
        {serviceList.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={() => setBooking(service)}
          />
        ))}
      </div>

      {booking && (
        <BookingModal
          booking={booking}
          date={date}
          onDateChange={setDate}
          onClose={() => setBooking(null)}
        />
      )}
    </section>
  );
}
