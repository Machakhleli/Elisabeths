import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you soon.");
  };

  return (
    <section className="min-h-screen bg-black text-white pt-10 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* CENTERED HEADER */}
        <div className="mb-24 text-center">
          <h1 className="font-display text-7xl md:text-9xl font-light tracking-tighter uppercase italic mb-6">
            Contact
          </h1>
          <p className="font-sans text-zinc-500 uppercase tracking-[0.5em] text-[10px]">
            Let’s create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT SIDE: Contact Info (Occupies 5 columns) */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="font-sans text-zinc-500 uppercase tracking-[0.4em] text-[9px] mb-8">
                Inquiries
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:hello@elisabeth.com"
                  className="font-display flex items-center gap-6 group text-2xl md:text-3xl font-light italic hover:text-zinc-400 transition-colors"
                >
                  <Mail
                    size={20}
                    strokeWidth={1}
                    className="text-zinc-600 group-hover:text-white transition-colors"
                  />
                  hello@elisabeth.com
                </a>
                <a
                  href="tel:+995598645460"
                  className="font-display flex items-center gap-6 group text-2xl md:text-3xl font-light italic hover:text-zinc-400 transition-colors"
                >
                  <Phone
                    size={20}
                    strokeWidth={1}
                    className="text-zinc-600 group-hover:text-white transition-colors"
                  />
                  +995 598 64 54 60
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-zinc-500 uppercase tracking-[0.4em] text-[9px] mb-8">
                Location
              </h3>
              <p className="font-display flex items-center gap-6 text-2xl md:text-3xl font-light italic">
                <MapPin size={20} strokeWidth={1} className="text-zinc-600" />
                Tbilisi, Georgia
              </p>
            </div>

            <div>
              <h3 className="font-sans text-zinc-500 uppercase tracking-[0.4em] text-[9px] mb-8">
                Follow
              </h3>
              <div
                className="font-display flex items-center gap-6 group text-2xl md:text-3xl font-light italic
               "
              >
                {" "}
                <a
                  href="https://www.instagram.com/captured_by_elizabeth/"
                  target="_blank"
                  className=" hover:text-zinc-400 transition-colors"
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://www.facebook.com/Elizabeth.Gogolishvili/"
                  target="_blank"
                  className="hover:text-zinc-400 transition-colors"
                >
                  <FaFacebook size={40} />
                </a>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  className="hover:text-zinc-400 transition-colors"
                >
                  <FaBehance size={40} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form (Occupies 7 columns) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-10 bg-zinc-950/50 p-8 md:p-12 border border-zinc-900"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative">
                <label className="font-sans text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="font-sans w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-base"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="group relative">
                <label className="font-sans text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="font-sans w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-base"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="group relative">
              <label className="font-sans text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                Subject
              </label>
              <input
                type="text"
                className="font-sans w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-base"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            <div className="group relative">
              <label className="font-sans text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="font-sans w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-base resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="font-sans w-full md:w-auto mt-10 px-16 py-4 border border-white text-white uppercase text-[11px] tracking-[0.4em] font-light hover:bg-white hover:text-black transition-all duration-700 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
