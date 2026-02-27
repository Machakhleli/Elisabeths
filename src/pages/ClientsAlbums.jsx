import { Link } from "react-router-dom";
import { clientAlbums } from "../data/clientAlbums";

export default function ClientsAlbums() {
  // If the data file is empty or failing to import, show a loading state instead of crashing
  if (!clientAlbums)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="min-h-screen mx-auto bg-black text-white px-6 md:px-20 pt-24 md:pt-32 flex flex-col items-center overflow-x-hidden">
      {/* Page Header - Centered for 1440px */}
      <div className="w-full max-w-7xl mx-auto border-b border-zinc-900 mb-12 md:mb-24">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl pb-8 md:pb-12 text-center font-light tracking-tighter uppercase italic">
          Client Albums
        </h1>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {clientAlbums.map((album) => (
          <Link
            key={album.id}
            to={`/clients/${album.id}`}
            className="group flex flex-col gap-5"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-3/4 overflow-hidden border border-zinc-900 bg-zinc-950">
              <img
                src={album.coverImage}
                alt={album.title || "Photography Album"}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                // This prevents the "Image not found" icon from breaking the layout
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x800?text=Image+Coming+Soon";
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Album Metadata */}
            <div className="flex flex-col gap-2 text-center md:text-left pb-4">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                  {album.date}
                </span>
                <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-light">
                  {album.client}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl italic font-light tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                {album.title}
              </h3>

              <div className="mt-2">
                <span className="text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-1 group-hover:border-white transition-colors duration-500">
                  View Collection
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="py-20 md:py-32"></div>
    </section>
  );
}
