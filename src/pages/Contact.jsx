import { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., EmailJS or a backend API)
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you soon.");
  };

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-6">
            Contact
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-[10px]">
            Let’s create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-zinc-500 uppercase tracking-widest text-[10px] mb-6">
                Inquiries
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@elisabeth.com"
                  className="flex items-center gap-4 group text-xl font-light hover:text-zinc-400 transition"
                >
                  <Mail
                    size={18}
                    strokeWidth={1}
                    className="text-zinc-600 group-hover:text-white transition"
                  />
                  hello@elisabeth.com
                </a>
                <a
                  href="tel:+995000000000"
                  className="flex items-center gap-4 group text-xl font-light hover:text-zinc-400 transition"
                >
                  <Phone
                    size={18}
                    strokeWidth={1}
                    className="text-zinc-600 group-hover:text-white transition"
                  />
                  +995 000 000 000
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-zinc-500 uppercase tracking-widest text-[10px] mb-6">
                Location
              </h3>
              <p className="flex items-center gap-4 text-xl font-light">
                <MapPin size={18} strokeWidth={1} className="text-zinc-600" />
                Tbilisi, Georgia
              </p>
            </div>

            <div>
              <h3 className="text-zinc-500 uppercase tracking-widest text-[10px] mb-6">
                Follow
              </h3>
              <a
                href="#"
                className="flex items-center gap-4 group text-xl font-light hover:text-zinc-400 transition"
              >
                <Instagram
                  size={18}
                  strokeWidth={1}
                  className="text-zinc-600 group-hover:text-white transition"
                />
                @elisabeth_photography
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="group relative">
                <label className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="group relative">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-lg"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            <div className="group relative">
              <label className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 block transition-colors group-focus-within:text-white">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-white transition-colors font-light text-lg resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="mt-10 px-12 py-4 border border-zinc-800 uppercase text-[11px] tracking-[0.3em] font-light hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
