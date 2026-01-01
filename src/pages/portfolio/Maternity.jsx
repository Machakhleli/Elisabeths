import { useState } from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a> for SPA speed
import { maternityGallery } from "../../data/maternityGallery";
import Lightbox from "../../components/Lightbox";

export default function Maternity() {
  // FIXED: Added 'selectedIdx' variable
  const [selectedIdx, setSelectedIdx] = useState(null);

  const showNext = () =>
    setSelectedIdx((prev) => (prev + 1) % maternityGallery.length);

  const showPrev = () =>
    setSelectedIdx(
      (prev) => (prev - 1 + maternityGallery.length) % maternityGallery.length
    );

  return (
    // FIXED: Added pt-32 (to clear the absolute header) and pb-20
    <section className="bg-black text-white pt-16 md:pt-25 pb-20 px-6">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-4">
          Maternity
        </h1>
        <p className="text-zinc-500 uppercase tracking-[0.4em] text-[10px]">
          The beauty of new beginnings
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {maternityGallery.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIdx(index)}
            className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-zinc-900"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* REUSABLE LIGHTBOX */}
      {selectedIdx !== null && (
        <Lightbox
          images={maternityGallery}
          currentIndex={selectedIdx} // Use the correct variable here
          onClose={() => setSelectedIdx(null)}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}

      {/* Portfolio Footer Navigation */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center border-t border-zinc-900 pt-12 pb-5">
        <Link
          to="/portfolio/family"
          className="text-sm md:text-lg font-light hover:text-zinc-400 transition-colors uppercase tracking-[0.2em]"
        >
          ← Family
        </Link>
        <Link
          to="/portfolio/commercial"
          className="text-sm md:text-lg font-light hover:text-zinc-400 transition-colors uppercase tracking-[0.2em]"
        >
          Commercial →
        </Link>
      </div>
    </section>
  );
}
