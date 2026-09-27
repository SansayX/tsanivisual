"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";

const links = [
  ["Home", "#home"],
  ["Works", "#works"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f7f5f0]/80 px-4 py-3 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="text-sm font-bold tracking-tight">Tsanii Visual</span>
          <span className="hidden text-[9px] tracking-[.2em] text-black/45 sm:block">VIDEO EDITING STUDIO</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium text-black/60 transition hover:text-black">{label}</a>
          ))}
        </div>

        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hidden items-center gap-1 rounded-full bg-[#181818] px-4 py-2 text-xs font-semibold text-white md:flex">
          Let&apos;s Talk <ArrowUpRight size={14} />
        </a>

        <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-black/10 bg-[#f7f5f0] p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-2xl font-medium">{label}</a>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="rounded-full bg-[#181818] px-5 py-3 text-center text-sm font-semibold text-white">Let&apos;s Talk</a>
          </div>
        </div>
      )}
    </header>
  );
}
