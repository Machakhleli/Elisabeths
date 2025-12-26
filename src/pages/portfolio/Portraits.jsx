import { useState, useEffect } from "react";
import { portraitGallery } from "../../data/portraits";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portraits() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // 1. Handle Keyboard Controls (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "ArrowLeft") showPrev(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  // 2. Lock Body Scroll when Lightbox is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedIdx]);

  const openLightbox = (index) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const showNext = (e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % portraitGallery.length);
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setSelectedIdx(
      (prev) => (prev - 1 + portraitGallery.length) % portraitGallery.length
    );
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 pb-32 pt-10">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-4">
          Portraits
        </h1>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] border-l border-zinc-800 pl-6">
          Capturing the soul through the lens. <br />A study of light, shadow,
          and human emotion.
        </p>
      </div>

      {/* Masonry-Style Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {portraitGallery.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className={`relative overflow-hidden group cursor-pointer ${
              photo.span || "md:col-span-1"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-[10px] tracking-widest uppercase text-white font-light">
                {photo.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-10 right-10 text-white hover:text-zinc-400 z-[110] transition-transform hover:scale-110"
            onClick={closeLightbox}
          >
            <X size={40} strokeWidth={1} />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-10 text-white hover:text-zinc-400 z-[110] transition-transform hover:scale-110"
            onClick={showPrev}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <button
            className="absolute right-4 md:right-10 text-white hover:text-zinc-400 z-[110] transition-transform hover:scale-110"
            onClick={showNext}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Display */}
          <div className="relative max-w-5xl max-h-full flex flex-col items-center">
            <img
              src={portraitGallery[selectedIdx].src}
              alt={portraitGallery[selectedIdx].alt}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl transition-all duration-500"
              onClick={(e) => e.stopPropagation()} // Prevents clicking image from closing lightbox
            />
            <div className="mt-8 text-center">
              <p className="text-[10px] tracking-[0.5em] uppercase text-white font-light">
                {portraitGallery[selectedIdx].alt}
              </p>
              <p className="text-zinc-600 text-[9px] mt-2 tracking-widest">
                {selectedIdx + 1} / {portraitGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto mt-32 flex justify-between items-center border-t border-zinc-900 pt-10">
        <span className="text-zinc-600 text-[10px] tracking-widest uppercase">
          Next Gallery
        </span>
        <a
          href="/portfolio/family"
          className="text-xl font-light hover:text-zinc-400 transition-colors uppercase tracking-widest"
        >
          Family →
        </a>
      </div>
    </section>
  );
}
