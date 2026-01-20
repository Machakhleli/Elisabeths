import { Instagram, Facebook, Globe } from "lucide-react"; // Using Lucide for a premium look

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-12 border-t border-zinc-900">
      <div className="max-w-100% mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-light">
            © {new Date().getFullYear()} Elisabeth GogoliSvili{" "}
            <br className="md:hidden" />
            Photography Studio. All rights reserved.
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-8 order-1 md:order-2">
          <a
            href="#"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="#"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="#"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            <span className="hidden sm:inline">Behance</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
