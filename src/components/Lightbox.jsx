import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (currentIndex === null) return;

    // Handle Keyboard & Mouse Wheel
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") triggerNext();
      if (e.key === "ArrowLeft") triggerPrev();
    };

    const handleWheel = (e) => {
      if (e.deltaY > 0) triggerNext(); // Scroll Down -> Next
      else if (e.deltaY < 0) triggerPrev(); // Scroll Up -> Prev
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  // Animation Wrapper Functions
  const triggerNext = () => {
    setIsFading(true);
    setTimeout(() => {
      onNext();
      setIsFading(false);
    }, 200); // Matches transition duration
  };

  const triggerPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      onPrev();
      setIsFading(false);
    }, 200);
  };

  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <button
        className="absolute top-10 right-10 text-white z-[110] cursor-pointer"
        onClick={onClose}
      >
        <X size={40} strokeWidth={1} />
      </button>

      {/* Nav Buttons */}
      <button
        className="absolute left-4 md:left-10 text-white z-[110] hover:scale-110 transition cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          triggerPrev();
        }}
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        className="absolute right-4 md:right-10 text-white z-[110] hover:scale-110 transition cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          triggerNext();
        }}
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Animated Image Container */}
      <div
        className={`relative max-w-5xl max-h-full flex flex-col items-center transition-all duration-300 ease-in-out ${
          isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-8 text-center uppercase tracking-[0.4em] font-light">
          <p className="text-[10px] text-white">{images[currentIndex].alt}</p>
          <p className="text-zinc-600 text-[9px] mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
