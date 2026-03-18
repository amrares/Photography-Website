"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const categories = [
    {
      id: "familii",
      name: "Familii",
      description: "Capturând momente prețioase ale familiei",
      images: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9e7b2f9b6b9a6f2b1b8f3d5f6a9d2a7c",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7b2e9b6b9a6f2b1b8f3d5f6a9d2a7c",
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f6b2e9b6b9a6f2b1b8f3d5f6a9d2a7c",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5b2e9b6b9a6f2b1b8f3d5f6a9d2a7c",
      ],
    },
    {
      id: "nunti",
      name: "Nunți",
      description: "Povestea iubirii voastre în imagini",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4b2c8f5e6d7c9b8a7f1e2d3c4b5a6d",
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
      ],
    },
    {
      id: "cupluri",
      name: "Cupluri",
      description: "Conexiunea voastră în cadre perfecte",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2e3d4a5f7c8b9d0e1a2c3b4d5e6f7a",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c3f4e5g8h9i0j1k2l3m4n5o6p7q8r9s",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8d4f5g6h9i0j1k2l3m4n5o6p7q8r9s0t",
        "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9e5g6h7i0j1k2l3m4n5o6p7q8r9s0t1u",
      ],
    },
    {
      id: "product",
      name: "Fotografie Produs",
      description: "Produsele voastre în cea mai bună lumină",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s",
      ],
    },
    {
      id: "portrete",
      name: "Portrete",
      description: "Personalitatea voastră capturată perfect",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w",
      ],
    },
    {
      id: "evenimente",
      name: "Evenimente",
      description: "Momentele speciale ale evenimentelor voastre",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen w-full text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,.35), rgba(10,10,10,.35)), url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="mb-6 text-4xl sm:text-6xl font-extrabold tracking-widest">
            PORTFOLIU
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/85">
            Descoperiți colecția mea de lucrări fotografice, organizate pe
            categorii pentru a vă inspira.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20">
            {categories.map((category, categoryIndex) => (
              <div key={category.id} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest uppercase">
                    {category.name}
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${category.name} ${imageIndex + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <div className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
                            Vezi Galerie
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href={`/#portfolio`}
                    className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors tracking-widest uppercase text-sm"
                  >
                    Vezi Mai Multe {category.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative flex items-center justify-center h-[400px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.45), rgba(20,20,20,0.45)), url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e8b2e8b2e8b2e8b2e8b2e8b2e8b2e8b')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-widest">
            GATA SĂ CREĂM MOMENTE DE NEUITAT?
          </h2>
          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            CONTACTEAZĂ-MĂ
          </a>
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
                href="/"
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
                  href="https://www.instagram.com/avrammrares/"
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
