import { useState } from "react";
import { familyGallery } from "../../data/familyGallery";
import Lightbox from "../../components/Lightbox";

export default function Family() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const showNext = () =>
    setSelectedIdx((prev) => (prev + 1) % familyGallery.length);
  const showPrev = () =>
    setSelectedIdx(
      (prev) => (prev - 1 + familyGallery.length) % familyGallery.length,
    );

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 pb-32 pt-10">
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-4">
          Family
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {familyGallery.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIdx(index)}
            className="relative aspect-4/5 overflow-hidden group cursor-pointer"
          >
            <img
              src={photo.src}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* REUSABLE LIGHTBOX */}
      <Lightbox
        images={familyGallery}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNext={showNext}
        onPrev={showPrev}
      />

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto mt-32 flex justify-between items-center border-t border-zinc-900 pt-10">
        <a
          href="/portfolio/portrait"
          className="text-xl font-light hover:text-zinc-400 transition-colors uppercase tracking-widest cursor:pointer"
        >
          ← Portrait
        </a>
        <a
          href="/portfolio/maternity"
          className="text-xl font-light hover:text-zinc-400 transition-colors uppercase tracking-widest cursor:pointer"
        >
          Maternity →
        </a>
      </div>
    </section>
  );
}
