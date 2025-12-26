import { Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="min-h-screen w-full px-8 py-20 text-white">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-5xl font-light tracking-wide">Portfolio</h2>
        <p className="mt-4 text-gray-300 max-w-xl">
          A curated selection of photography projects, capturing moments,
          emotions, and stories across different genres.
        </p>
      </div>

      {/* Nested Portfolio Pages */}
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </section>
  );
}
