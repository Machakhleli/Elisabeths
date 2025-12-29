import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import mainPhoto from "../assets/main-photo.jpg";
import BookingModal from "../components/BookingModal";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isModalOpen = searchParams.get("book") === "true";
  const openModal = () => setSearchParams({ book: "true" });
  const closeModal = () => setSearchParams({});

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    // min-h-screen ensures it takes the full window height
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row lg:justify-end bg-black overflow-x-hidden">
      {/* TEXT OVERLAY BOX */}
      {/* On desktop, we use lg:top-1/2 to keep it centered while the header sits at the top */}
      <div
        className="
        relative lg:absolute 
        mt-32 mb-10 mx-6 
        lg:mt-0 lg:mb-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-28 
        z-10 
        w-[calc(100%-3rem)] lg:w-[40%] 
        min-h-[50vh] lg:h-[70vh] 
        bg-white flex flex-col justify-center items-center gap-10 md:gap-20 
        shadow-2xl p-8 md:p-12
      "
      >
        <span className="text-xl md:text-3xl font-light tracking-widest uppercase text-black">
          Elisabeth Gogolishvili
        </span>

        <h1 className="text-4xl md:text-6xl text-center font-light leading-tight tracking-tighter text-black">
          PHOTOGRAPHY <br className="hidden md:block" /> STUDIO
        </h1>

        <button
          onClick={openModal}
          className="cursor-pointer border-b-2 border-black text-black hover:text-gray-500 transition-colors duration-300 uppercase text-sm tracking-[0.3em] pb-1"
        >
          Book Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-[65%] h-[70vh] lg:h-screen">
        <img
          src={mainPhoto}
          alt="Main portrait"
          className="w-full h-full object-cover grayscale md:grayscale-0"
        />
      </div>

      {isModalOpen && (
        <BookingModal
          booking={{
            title: "Studio Session",
            duration: "Custom",
            price: "Varies",
          }}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
