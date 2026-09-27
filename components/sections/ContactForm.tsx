"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/config";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    const data = new FormData(e.currentTarget);
    const message = `Halo Tsanii Visual, saya ${data.get("name")}. Saya tertarik dengan ${data.get("type")}. ${data.get("message")}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 rounded-[2rem] bg-[#e9e7df] p-6 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:p-14">
        <div>
          <p className="mb-4 text-[10px] font-semibold tracking-[.28em] text-black/45">08 — CONTACT</p>
          <h2 className="text-5xl font-medium tracking-[-.05em] sm:text-6xl">Let&apos;s Create<br /><span className="font-display">Something.</span></h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-black/55">Tell us what you&apos;re working on.</p>
          <div className="mt-10 space-y-3 text-sm">
            <p><span className="text-black/40">WhatsApp</span><br />{siteConfig.whatsapp}</p>
            <p><span className="text-black/40">Instagram</span><br />@tsaniivisual</p>
            <p><span className="text-black/40">Email</span><br />{siteConfig.email}</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-xs text-black/50">Name</span>
            <input name="name" required className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 focus:border-black" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-black/50">Email</span>
            <input type="email" name="email" required className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 focus:border-black" placeholder="you@email.com" />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-black/50">WhatsApp</span>
            <input name="whatsapp" className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 focus:border-black" placeholder="08xx..." />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-black/50">Project Type</span>
            <select name="type" className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none">
              <option>Reels</option><option>TikTok</option><option>Cinematic Video</option><option>Vlog</option><option>Product Video</option><option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs text-black/50">Message</span>
            <textarea name="message" required rows={4} className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/25 focus:border-black" placeholder="Tell us about your project..." />
          </label>
          <button type="submit" className="mt-3 flex items-center gap-2 rounded-full bg-[#181818] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
            {sent ? "Opening WhatsApp..." : "Send Inquiry"} <ArrowUpRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
