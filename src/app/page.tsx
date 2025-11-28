import Link from "next/link";
import React from "react";

export default function Home() {
  const bgUrl =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=bd5f9e2e0adfc8f25f7b9a9ecf5b1b85";

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <header className="absolute z-20 left-0 right-0 top-6">
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
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Portfoliu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
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

      <section
        className="relative z-10 flex min-h-screen w-full items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,.35), rgba(10,10,10,.35)), url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/80">
            Salut! sunt
          </h2>
          <h1 className="mb-6 text-4xl sm:text-6xl font-extrabold tracking-widest">
            Avram Rares
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/85">
            Ma specializez in fotografia de evenimente si portrete, capturand
            momente unice pentru a crea amintiri de neuitat.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-white/95 px-6 py-3 text-sm font-medium text-black shadow-md hover:opacity-95"
            >
              Vezi Portofoliu
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-xl tracking-widest uppercase text-gray-700">
            Buna! Sunt Rares.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            Cauti un fotograf pasionat, distractiv, creativ si atent? Acela sunt
            eu! Răsfoiește câteva lucrări recente mai jos.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Familii */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9e7b2f9b6b9a6f2b1b8f3d5f6a9d2a7c"
                  alt="Families"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Familii
              </div>
            </div>

            {/* Nunti */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4b2c8f5e6d7c9b8a7f1e2d3c4b5a6d"
                  alt="Weddings"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Nunti
              </div>
            </div>

            {/* Cupluri */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2e3d4a5f7c8b9d0e1a2c3b4d5e6f7a"
                  alt="Couples"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Cupluri
              </div>
            </div>

            {/* Product Photography */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9e7b2f9b6b9a6f2b1b8f3d5f6a9d2a7c"
                  alt="Fashion"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Product Photography
              </div>
            </div>

            {/* Portrete */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a4b2c8f5e6d7c9b8a7f1e2d3c4b5a6d"
                  alt="Portraits"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Portrete
              </div>
            </div>

            {/* Evenimente */}
            <div className="rounded-lg overflow-hidden bg-white shadow-lg">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2e3d4a5f7c8b9d0e1a2c3b4d5e6f7a"
                  alt="Children"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center transition-all duration-200 group-hover:bg-black/40">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition-opacity duration-200">
                    See Gallery
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 text-sm uppercase tracking-widest text-gray-700">
                Evenimente
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden />
    </div>
  );
}
