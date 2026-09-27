"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Portfolio() {
  const [active, setActive] = useState<(typeof siteConfig.portfolio)[number] | null>(null);

  return (
    <>
      <section id="works" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-[.28em] text-black/45">03 — SELECTED WORKS</p>
              <h2 className="text-5xl font-medium tracking-[-.05em] sm:text-7xl">Selected <span className="font-display">Works.</span></h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-black/50 sm:block">Some visuals we&apos;ve worked on.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {siteConfig.portfolio.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActive(project)}
                className={`group text-left ${index % 3 === 0 ? "md:translate-y-8" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#dedbd2]">
                  <img src={project.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="text-white">
                      <p className="text-lg font-medium">{project.title}</p>
                      <p className="text-xs text-white/70">{project.category}</p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"><ArrowUpRight size={17} /></span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between px-1">
                  <span className="text-sm font-medium">{project.title}</span>
                  <span className="text-xs text-black/45">{project.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${active.title} project detail`}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-[#f7f5f0] p-5 sm:p-8">
            <button onClick={() => setActive(null)} aria-label="Close project" className="absolute right-5 top-5 rounded-full bg-black/5 p-2"><X size={18} /></button>
            <img src={active.image} alt="" className="aspect-video w-full rounded-2xl object-cover" />
            <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-black/45">{active.category}</p>
                <h3 className="mt-2 text-4xl font-medium">{active.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-black/60">{active.description}</p>
              </div>
              <div className="text-sm text-black/55">
                <p><strong className="text-black">Style</strong><br />{active.style}</p>
                <p className="mt-5"><strong className="text-black">Tools</strong><br />{active.tools}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
