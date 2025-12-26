import { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 pb-20 pt-10">
      <h1 className="text-4xl md:text-7xl py-20 text-center font-light tracking-wide uppercase border-b border-zinc-800">
        Contact
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-24 items-start grayscale place-self-center">
        <div className="flex flex-col gap-12 pt-10 grayscale">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Location
            </h2>
            <p className="text-xl font-light">Batumi, Adjara, Georgia</p>
            <p className="text-zinc-400">Available for travel worldwide</p>
          </div>

          <div>
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Direct
            </h2>
            <p className="text-xl font-light">info@elisabethphoto.com</p>
            <p className="text-xl font-light">+995 555 00 00 00</p>
          </div>

          <div>
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Social
            </h2>
            <div className="flex gap-8 items-center text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        {/* Right Side: THE WHITE FORM */}
        <div className="bg-white p-8 md:p-12 shadow-2xl text-black">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-widest text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition text-black"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-widest text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition text-black"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] uppercase tracking-widest text-black">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="bg-transparent border-b border-zinc-200 py-2 focus:border-black outline-none transition text-black"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] uppercase tracking-widest text-black">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="bg-zinc-50 border border-zinc-200 p-4 focus:border-black outline-none transition resize-none text-black"
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-black border transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
