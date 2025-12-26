import aboutMain from "../assets/about-photo.jpeg";
import TestimonialSlider from "../components/TestimonialSlider";
import { clientReviews } from "../data/reviews";

export default function About() {
  const reviews = [{ id: 1, text: "", author: "author" }];
  return (
    <section className="min-h-screen bg-black text-white px-20">
      <h1 className="text-6xl md:text-8xl pt-20 pb-30 text-center font-light tracking-wide uppercase border-b border-zinc-800">
        About
      </h1>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="space-y-6 text-zinc-400 leading-relaxed p-10">
            <h2 className="text-2xl text-center text-white font-light tracking-widest uppercase">
              Meet the photographer
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              tempora aspernatur a dolor. Porro qui dolore, optio hic id
              excepturi! Totam explicabo cumque quo possimus quisquam vero
              aspernatur reprehenderit a.
            </p>
            <p>
              My approach focuses on capturing the raw, authentic moments that
              define your story, whether in portraiture or commercial work.
            </p>
          </div>
        </div>

        <div
          className="w-full aspect-[4/5] h-[90vh] bg-cover bg-center bg-no-repeat shadow-2xl order-1 md:order-2 grayscale hover:grayscale-0 transition-all duration-700"
          style={{ backgroundImage: `url(${aboutMain})` }}
          role="img"
          aria-label="Portrait of Elisabeth"
        ></div>
      </div>
      <TestimonialSlider reviews={clientReviews} />
    </section>
  );
}
