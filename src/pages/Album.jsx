import { clientAlbums } from "../data/clientAlbums";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Lightbox from "../components/Lightbox";

export default function AlbumView() {
  const { albumId } = useParams();
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Find the specific album based on the URL ID
  const album = clientAlbums.find((a) => String(a.id) === albumId);
  const photos = album?.photos || [];

  if (!album) {
    return <div className="text-white text-center pt-40">Album not found.</div>;
  }

  const showNext = () =>
    setSelectedIdx((prev) => (prev + 1) % album.photos.length);
  const showPrev = () =>
    setSelectedIdx(
      (prev) => (prev - 1 + album.photos.length) % album.photos.length,
    );

  return (
    <section className="min-h-screen mx-auto bg-black text-white px-6 md:px-20 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Link
          to="/clients"
          className="text-zinc-500 uppercase tracking-widest text-[10px] hover:text-white transition-colors"
        >
          ← Back to Albums
        </Link>

        <header className="flex flex-col justify-center items-center mt-10 mb-16 border-b border-zinc-900 pb-10">
          <h1 className="font-display text-4xl md:text-6xl italic font-light tracking-tight">
            {album.title}
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mt-4">
            {album.client} — {album.date}
          </p>
        </header>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIdx(index)}
              className="aspect-square overflow-hidden bg-zinc-900 cursor-pointer group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Lightbox */}
      <Lightbox
        images={album.photos}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNext={showNext}
        onPrev={showPrev}
      />
    </section>
  );
}
