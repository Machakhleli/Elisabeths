import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import BookingModal from "../components/BookingModal";
import { serviceList } from "../data/services";

export default function Services() {
  const [booking, setBooking] = useState(null);
  const [date, setDate] = useState(new Date());

  return (
    <section className="mx-auto w-full max-w-90rem min-h-screen flex flex-col items-center gap-20 p-6 bg-black">
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
