import aboutMain from "../assets/about-photo.jpeg";
import TestimonialSlider from "../components/TestimonialSlider";
import { clientReviews } from "../data/reviews";

export default function About() {
  return (
    // Added 'items-center' and 'overflow-x-hidden' to the main section
    <section className="min-h-screen my-0 mx-auto bg-black text-white px-6 md:px-20 pt-24 md:pt-32 flex flex-col items-center overflow-x-hidden">
      {/* Page Title - mx-auto ensures it stays centered on 1440px+ screens */}
      <div className="w-full max-w-7xl mx-auto border-b border-zinc-900 mb-16 md:mb-24">
        <h1 className="font-display text-6xl md:text-9xl pb-10 text-center font-light tracking-tighter uppercase italic">
          About
        </h1>
      </div>

      {/* Main Content Grid - mx-auto and place-items-center for perfect 1440px centering */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center place-items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 w-full">
          <div className="space-y-8 py-4 lg:pr-10 text-center lg:text-left">
            <div className="space-y-2">
              <span className="font-sans text-[10px] uppercase tracking-0.5em text-zinc-500 block">
                Behind the Lens
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light tracking-tight italic">
                Meet the Photographer
              </h2>
            </div>

            <div className="font-sans space-y-6 text-zinc-400 leading-loose font-light text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                tempora aspernatur a dolor. Porro qui dolore, optio hic id
                excepturi! Totam explicabo cumque quo possimus quisquam vero
                aspernatur reprehenderit a.
              </p>
              <p className="border-l-0 lg:border-l border-zinc-800 pl-0 lg:pl-6 italic font-display text-xl text-zinc-300">
                "My approach focuses on capturing the raw, authentic moments
                that define your story."
              </p>
            </div>

            <p className="font-display text-3xl italic tracking-tighter pt-4">
              Elisabeth G.
            </p>
          </div>
        </div>

        {/* Hero Image - mx-auto ensures centering on tablet/mobile */}
        <div
          className="w-full aspect-4/5 lg:h-[75vh] bg-cover bg-center bg-no-repeat shadow-2xl order-1 lg:order-2 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border border-zinc-900 mx-auto"
          style={{ backgroundImage: `url(${aboutMain})` }}
          role="img"
          aria-label="Portrait of Elisabeth"
        ></div>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl mx-auto py-20">
        <TestimonialSlider reviews={clientReviews} />
      </div>
    </section>
  );
}
