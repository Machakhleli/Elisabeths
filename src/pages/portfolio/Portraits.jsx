import { useState } from "react";
// 1. Corrected naming: import portraitGallery from portraits data
import { portraitGallery } from "../../data/portraits";
import Lightbox from "../../components/Lightbox";

export default function Portraits() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Navigation logic
  const showNext = () =>
    setSelectedIdx((prev) => (prev + 1) % portraitGallery.length);

  const showPrev = () =>
    setSelectedIdx(
      (prev) => (prev - 1 + portraitGallery.length) % portraitGallery.length
    );

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 pb-32 pt-10">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto py-20 text-center ">
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-6">
          Portraits
        </h1>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] max-w-md mx-auto leading-relaxed">
          A study of light and character.
        </p>
      </div>

      {/* 2. Improved Masonry Grid Logic */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {portraitGallery.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIdx(index)}
            // 3. Re-introduced photo.span for the high-end look
            className={`relative overflow-hidden group cursor-pointer ${
              photo.span || "md:col-span-1"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt || "Portrait Photography"}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* REUSABLE LIGHTBOX */}
      <Lightbox
        images={portraitGallery}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNext={showNext}
        onPrev={showPrev}
      />

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
