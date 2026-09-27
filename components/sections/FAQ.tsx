"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mb-4 text-[10px] font-semibold tracking-[.28em] text-black/45">07 — FAQ</p>
          <h2 className="text-5xl font-medium tracking-[-.05em]">Things you<br /><span className="font-display">might ask.</span></h2>
        </div>
        <div className="border-t border-black/10">
          {siteConfig.faqs.map(([q, a], index) => (
            <div key={q} className="border-b border-black/10">
              <button className="flex w-full items-center justify-between py-5 text-left" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                <span className="pr-5 text-sm font-medium sm:text-base">{q}</span>
                <Plus size={18} className={`shrink-0 transition ${open === index ? "rotate-45" : ""}`} />
              </button>
              {open === index && <p className="max-w-2xl pb-5 pr-10 text-sm leading-7 text-black/55">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
