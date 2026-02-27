import { Instagram, Facebook, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-12 border-t border-zinc-900">
      {/* 1. max-w-7xl mx-auto: Centers the whole block on 1440px+ screens
         2. flex-col: Stacks items on mobile
         3. md:flex-row: Side-by-side on desktop
         4. items-center: Centers items horizontally on mobile stack
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright Text */}
        {/* order-2 on mobile puts this below the social links */}
        <div className="text-center md:text-left order-2 md:order-1">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-light">
            © {new Date().getFullYear()} Elisabeth Gogolishvili{" "}
            <br className="md:hidden" />
            Photography Studio. All rights reserved.
          </span>
        </div>

        {/* Social Media Links */}
        {/* order-1 on mobile puts this on top */}
        <div className="flex items-center justify-center gap-8 order-1 md:order-2">
          <a
            href="https://www.facebook.com/Elizabeth.Gogolishvili/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            {/* hidden sm:inline keeps the text hidden on very small phones if you want only icons, 
                or remove 'hidden' if you want the text visible always */}
            <span className="">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/captured_by_elizabeth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            <span className="">Instagram</span>
          </a>

          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-light text-white hover:text-zinc-500 transition-colors flex items-center gap-2"
          >
            <span className="">Behance</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
