"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const bgUrl =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=bd5f9e2e0adfc8f25f7b9a9ecf5b1b85";

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Header: becomes fixed at top when scrolling */}
      <Header />

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
      <section id="portfolio" className="bg-gray-50 py-20">
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

      {/* Parallax Call-to-Action Section */}
      <section
        className="relative flex items-center justify-center h-[400px] md:h-[500px] w-full"
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
            HAI SA FACEM CEVA MINUNAT IMPREUNA.
          </h2>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            CONTACT
          </a>
        </div>
      </section>

      {/* Din jurnal */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-widest mb-12 uppercase text-gray-700">
            Din jurnal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-0 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=600&h=300&q=80"
                alt="Reflection"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase text-blue-400 font-semibold mb-2">
                  Reflection
                </span>
                <h3 className="font-bold text-lg mb-2 leading-snug">
                  Ligula tristique quis risus eget urna mollis ornare
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Cum sociis natoque.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4 mt-auto">
                  <span>5 Jul 2018</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                      />
                    </svg>
                    3
                  </span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-0 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&h=300&q=80"
                alt="Entertainment"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase text-blue-400 font-semibold mb-2">
                  Entertainment
                </span>
                <h3 className="font-bold text-lg mb-2 leading-snug">
                  Nullam id dolor elit id nibh pharetra augue venenatis
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  Aenean lacinia bibendum nulla sed consectetur. Integer posuere
                  erat a ante porttitor mollis sagittis lacus.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4 mt-auto">
                  <span>18 Jun 2018</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                      />
                    </svg>
                    5
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow p-0 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&h=300&q=80"
                alt="Travel"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase text-blue-400 font-semibold mb-2">
                  Travel
                </span>
                <h3 className="font-bold text-lg mb-2 leading-snug">
                  Ultricies fusce porta elit pharetra augue faucibus
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1">
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Maecenas faucibus. Tellus vulputate non magna.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4 mt-auto">
                  <span>14 May 2018</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                      />
                    </svg>
                    7
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Pagini si sageti */}
          <div className="flex items-center justify-center mt-8 gap-8">
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-700 p-2 rounded transition">
                <span className="text-2xl">&#8592;</span>
              </button>
              <button className="text-gray-400 hover:text-gray-700 p-2 rounded transition">
                <span className="text-2xl">&#8594;</span>
              </button>
            </div>
            <div className="text-xs text-gray-400 tracking-widest">
              01 02 03
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden />

      {/* Footer */}
      <footer className="bg-[#181818] text-white pt-16 pb-8 mt-0">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
          {/* Postari populare */}
          <div className="md:col-span-1">
            <h3 className="mb-6 font-semibold tracking-widest uppercase text-base">
              Postari populare
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="Popular post 1"
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <div className="font-semibold">Magna mollis ornare</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    12 Nov 2014 <span className="mx-1">/</span>{" "}
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                        ></path>
                      </svg>
                      4
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="Popular post 2"
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <div className="font-semibold">Nullam risus cursus</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    12 Nov 2014 <span className="mx-1">/</span>{" "}
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                        ></path>
                      </svg>
                      4
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="Popular post 3"
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <div className="font-semibold">Blandit tempus fusce</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    12 Nov 2014 <span className="mx-1">/</span>{" "}
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 inline"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 3h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2z"
                        ></path>
                      </svg>
                      4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tags & Categorii */}
          <div className="md:col-span-1">
            <h3 className="mb-6 font-semibold tracking-widest uppercase text-base">
              Tags
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Urban
              </span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Portrait
              </span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Weddings
              </span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Events
              </span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                Landscape
              </span>
            </div>
            <h3 className="mb-3 font-semibold tracking-widest uppercase text-base">
              Categorii
            </h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Lifestyle (21)</li>
              <li>• Photo (19)</li>
              <li>• Journal (16)</li>
              <li>• Works (7)</li>
              <li>• Still Life (9)</li>
              <li>• Travel (17)</li>
            </ul>
          </div>
          {/* Contact and socials */}
          <div className="md:col-span-1">
            <h3 className="mb-6 font-semibold tracking-widest uppercase text-base">
              Contacteaza-ma
            </h3>
            <div className="mb-6">
              <div className="mt-2">+40 773 322 617</div>
              <div>E: rares03avram@gmail.com</div>
            </div>
            <h3 className="mb-3 font-semibold tracking-widest uppercase text-base">
              Alte platforme
            </h3>
            <div className="flex gap-4 text-xl">
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

              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="social-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  className="w-5 h-5"
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
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="social-icon"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  className="w-5 h-5"
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
            </div>
          </div>
          {/* Learn More */}
          <div className="md:col-span-1">
            <h3 className="mb-6 font-semibold tracking-widest uppercase text-base">
              Afla mai multe
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Despre mine
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Povestea mea
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Proiecte
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-12">
          © 2019 Rares. All rights reserved.
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
              <li>
                <a href="#preturi" className="hover:text-white">
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
