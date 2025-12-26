import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import mainPhoto from "../assets/main-photo.jpg";
import BookingModal from "../components/BookingModal";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Check if "book=true" exists in the URL
  const isModalOpen = searchParams.get("book") === "true";

  // Open: Adds ?book=true to URL
  const openModal = () => setSearchParams({ book: "true" });

  // Close: Clears the URL parameters
  const closeModal = () => setSearchParams({});

  // ESC Key listener
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative w-full h-full flex justify-end ">
      <div className="absolute top-40 left-28 z-10 w-[40%] h-[70vh] bg-white flex flex-col justify-center items-center gap-20 shadow-2xl">
        <span className="text-3xl">Elisabeth GogoliSvili</span>
        <h1 className="text-6xl text-center">PHOTOGRAPHY STUDIO</h1>

        {/* Trigger */}
        <button
          onClick={openModal}
          className="w-25 cursor-pointer border-b-2 border-black hover:text-gray-500 transition-colors duration-300 uppercase text-sm tracking-widest pb-1"
        >
          Book Now
        </button>
      </div>

      <div className="w-[65%] h-full">
        <img
          src={mainPhoto}
          alt="Main portrait"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Modal renders only when URL contains ?book=true */}
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
