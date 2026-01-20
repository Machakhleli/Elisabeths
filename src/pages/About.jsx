import aboutMain from "../assets/about-photo.jpeg";
import TestimonialSlider from "../components/TestimonialSlider";
import { clientReviews } from "../data/reviews";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 pt-20 md:pt-25">
      {/* Page Title - Magazine Style */}
      <div className="max-w-7xl mx-auto border-b border-zinc-900 mb-20">
        <h1 className="font-display text-7xl md:text-9xl pb-10 text-center font-light tracking-tighter uppercase italic">
          About
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-8 p-4 md:p-10">
            <div className="space-y-2 text-center lg:text-left">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-zinc-500">
                Behind the Lens
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light tracking-tight italic">
                Meet the Photographer
              </h2>
            </div>

            <div className="font-sans space-y-6 text-zinc-400 leading-loose font-light text-sm md:text-base">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                tempora aspernatur a dolor. Porro qui dolore, optio hic id
                excepturi! Totam explicabo cumque quo possimus quisquam vero
                aspernatur reprehenderit a.
              </p>
              <p className="border-l border-zinc-800 pl-6 italic font-display text-xl text-zinc-300">
                "My approach focuses on capturing the raw, authentic moments
                that define your story, whether in portraiture or commercial
                work."
              </p>
            </div>

            {/* Signature */}
            <p className="font-display text-3xl italic tracking-tighter pt-4">
              Elisabeth G.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="w-full aspect-4/5 lg:h-[80vh] bg-cover bg-center bg-no-repeat shadow-2xl order-1 lg:order-2 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border border-zinc-900"
          style={{ backgroundImage: `url(${aboutMain})` }}
          role="img"
          aria-label="Portrait of Elisabeth"
        ></div>
      </div>

      {/* Testimonials - We'll assume the slider handles its own internal fonts */}
      <div className="py-20">
        <TestimonialSlider reviews={clientReviews} />
      </div>
    </section>
  );
}
