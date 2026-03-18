"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Mesaj trimis! Vă vom contacta în curând.");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,.35), rgba(10,10,10,.35)), url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=bd5f9e2e0adfc8f25f7b9a9ecf5b1b85')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="mb-6 text-4xl sm:text-6xl font-extrabold tracking-widest">
            CONTACTEAZĂ-MĂ
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/85">
            Hai să discutăm despre proiectul tău fotografic. Sunt aici să
            transform ideile tale în amintiri de neuitat.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-widest uppercase">
                Să vorbim
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                  <p className="text-gray-300">+40 773 322 617</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">rares03avram@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Locație</h3>
                  <p className="text-gray-300">Beiuș, România</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Urmărește-mă</h3>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://www.instagram.com/avrammrares/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path
                          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.5 6.5h.01"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path
                          d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-2.9h2V9.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.6h2.2l-.35 2.9H14v7A10 10 0 0 0 22 12z"
                          stroke="currentColor"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-widest uppercase">
                Trimite un mesaj
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
                    placeholder="email@exemplu.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white text-white"
                    placeholder="+40 123 456 789"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Tip serviciu
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
                  >
                    <option value="">Selectează un serviciu</option>
                    <option value="wedding">Nunți</option>
                    <option value="portrait">Portrete</option>
                    <option value="event">Evenimente</option>
                    <option value="family">Familii</option>
                    <option value="product">Fotografie produs</option>
                    <option value="other">Altceva</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white resize-none"
                    placeholder="Spune-mi despre proiectul tău..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors tracking-widest uppercase"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Avram Rares. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Header() {
  const ref = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (el) setHeight(el.getBoundingClientRect().height);

    const onScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    const onResize = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Update height whenever sticky state changes (header padding/size can change)
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [isSticky]);

  return (
    <>
      <header
        ref={ref}
        className={`z-50 left-0 right-0 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 bg-black/70 backdrop-blur-sm shadow-md py-4"
            : "absolute top-6 py-3"
        }`}
        style={
          {
            // a slightly thicker header when sticky
          }
        }
      >
        <nav className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center justify-start">
              <a
                className="text-3xl font-script tracking-wider text-white/95"
                href="#"
              >
                Rares
              </a>
            </div>
            <ul className="hidden md:flex gap-8 text-sm uppercase text-white/90 tracking-widest">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-white">
                  Portfoliu
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#preturi" className="hover:text-white">
                  Preturi
                </a>
              </li>
            </ul>
            <div className="flex-1 flex justify-end items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.5v-2.9h2V9.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.6h2.2l-.35 2.9H14v7A10 10 0 0 0 22 12z"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="social-icon"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M4 4L20 20M20 4L4 20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* preserve layout when header becomes fixed */}
      {isSticky && <div style={{ height: height }} aria-hidden />}
    </>
  );
}
