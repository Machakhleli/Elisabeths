import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-calendar/dist/Calendar.css";

export default function BookingModal({ booking, onClose }) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const timeSlots = ["10:00 am", "12:00 pm", "14:00 pm", "16:00 pm"];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-0 md:p-10">
      <style>{`
        .react-calendar { border: none !important; width: 100% !important; font-family: inherit; background: transparent !important; }
        .react-calendar__tile { 
          display: flex !important; align-items: center; justify-content: center; 
          height: 50px; cursor: pointer !important; color:#18181b !important; 
        }
        .react-calendar__month-view__weekdays { 
          text-align: center; text-transform: uppercase; font-weight: 600; font-size: 0.7rem; color: #71717a !important;
        }
        .react-calendar__month-view__weekdays__weekday abbr { text-decoration: none !important;  }
        .react-calendar__navigation button { cursor: pointer !important; font-size: 1.2rem; color: black !important; }
        .react-calendar__tile--active { background: black !important; color: white !important; border-radius: 4px; }
        .react-calendar__tile:enabled:hover { background-color: #f3f4f6 !important; border-radius: 4px; }
      `}</style>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Container - Added text-black here to force all text inside to be visible */}
      <div className="relative bg-white text-black w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Desktop Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-gray-400 hover:text-black transition-colors cursor-pointer hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* LEFT SIDE */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-8">
            <h3 className="text-xl uppercase tracking-widest text-black">
              {step === 1 ? "Select Date & Time" : "Your Details"}
            </h3>
            {step === 1 && (
              <span className="text-[10px] text-gray-400">
                Georgia Standard Time (GMT+4)
              </span>
            )}
          </div>

          {step === 1 ? (
            <div className="flex flex-col lg:flex-row gap-10">
              <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()}
                className="border-none flex-1"
                prevLabel={<ChevronLeft size={20} />}
                nextLabel={<ChevronRight size={20} />}
                prev2Label={null}
                next2Label={null}
              />

              {/* TIME SLOTS FIX: Added text-zinc-800 and border-zinc-200 */}
              <div className="w-full lg:w-48 flex flex-col gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 border text-sm transition-all cursor-pointer ${
                      selectedTime === t
                        ? "bg-black text-white border-black"
                        : "bg-white text-zinc-800 border-zinc-200 hover:border-black"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* STEP 2: USER FORM FIX: Added text-zinc-500 and text-black */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
              {[
                { label: "First Name", type: "text" },
                { label: "Last Name", type: "text" },
                { label: "Email", type: "email", full: true },
                { label: "Phone Number", type: "tel", full: true },
              ].map((field) => (
                <div
                  key={field.label}
                  className={`flex flex-col gap-2 ${field.full ? "md:col-span-2" : ""}`}
                >
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="border-b border-gray-300 py-2 outline-none focus:border-black text-black"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="border border-gray-200 p-3 outline-none focus:border-black resize-none text-black"
                  placeholder="Anything else we should know?"
                />
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-[10px] uppercase tracking-widest underline text-left cursor-pointer text-zinc-400 hover:text-black"
              >
                Back to selection
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: ASIDE */}
        <aside className="w-full md:w-80 bg-zinc-50 p-8 md:p-10 flex flex-col border-l border-zinc-100">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-10 border-b border-zinc-200 pb-4 text-black">
            Service Details
          </h4>

          <div className="flex-1 space-y-6">
            <div className="text-[10px] text-zinc-600 space-y-1 flex flex-col gap-2">
              <p className="text-black text-xs font-bold">
                {booking.title.toUpperCase()}
              </p>
              <p className="text-zinc-800">{date.toDateString()}</p>
              <p className="text-zinc-800">
                {selectedTime || "Time not selected"}
              </p>
              <p className="text-zinc-500">
                {booking.duration} | {booking.price}
              </p>
            </div>
          </div>

          <button
            disabled={step === 1 && !selectedTime}
            onClick={() =>
              step === 1 ? setStep(2) : alert("Booking Confirmed!")
            }
            className="bg-zinc-800 text-white py-4 w-full uppercase text-[10px] tracking-[0.2em] hover:bg-black transition-all disabled:opacity-30 mt-8 cursor-pointer disabled:cursor-not-allowed"
          >
            {step === 1 ? "Next" : "Confirm Booking"}
          </button>
        </aside>

        {/* Close Button Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black md:hidden cursor-pointer p-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
