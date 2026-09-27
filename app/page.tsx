import { ArrowDownRight, ArrowUpRight, Check, Film, Palette, Sparkles, Clapperboard } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { VideoShowcase } from "@/components/hero/VideoShowcase";
import { Marquee } from "@/components/sections/Marquee";
import { Portfolio } from "@/components/sections/Portfolio";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, whatsappUrl } from "@/lib/config";

const icons = [Film, Clapperboard, Palette, Sparkles, Film];

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <section className="grain min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="reveal">
            <p className="mb-7 flex items-center gap-2 text-[10px] font-semibold tracking-[.28em] text-black/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a8b5a2]" /> VIDEO EDITING • COLOR GRADING • SHORT FORM
            </p>
            <h1 className="max-w-4xl text-[4rem] font-medium leading-[.88] tracking-[-.07em] sm:text-8xl lg:text-[7.6rem]">
              Your footage.
              <br />
              Our <span className="font-display">visual touch.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-black/55 sm:text-base">
              Video editing yang clean, cinematic, dan aesthetic untuk bikin cerita kamu terasa lebih hidup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#works" className="flex items-center gap-2 rounded-full bg-[#181818] px-5 py-3 text-sm font-semibold text-white">See Our Work <ArrowDownRight size={16} /></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">Let&apos;s Create <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="reveal [animation-delay:180ms]">
            <VideoShowcase />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.35fr_1fr]">
          <p className="text-[10px] font-semibold tracking-[.28em] text-black/45">01 — OUR APPROACH</p>
          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[.95] tracking-[-.05em] sm:text-7xl">
              Not just editing.
              <br />
              <span className="font-display">It&apos;s a visual feeling.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              Setiap footage punya cerita. Kami membantu merapikan, memberi mood, dan membangun visual yang sesuai dengan karakter konten kamu.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-[.28em] text-black/45">02 — SERVICES</p>
              <h2 className="text-5xl font-medium tracking-[-.05em] sm:text-7xl">What We <span className="font-display">Do.</span></h2>
            </div>
          </div>
          <div className="divide-y border-y border-black/10">
            {siteConfig.services.map((service, i) => {
              const Icon = icons[i];
              return (
                <article key={service.number} className="group grid gap-5 py-7 transition hover:px-2 sm:grid-cols-[80px_1fr_auto] sm:items-center">
                  <span className="text-xs text-black/35">{service.number}</span>
                  <div className="flex gap-4">
                    <Icon className="mt-1 shrink-0 text-black/35" size={20} />
                    <div>
                      <h3 className="text-xl font-medium">{service.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-black/50">{service.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="hidden text-black/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="grain mx-5 overflow-hidden rounded-[2rem] bg-[#252525] px-6 py-24 text-white sm:mx-8 lg:mx-10 lg:px-14 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold tracking-[.28em] text-white/40">04 — VISUAL BREAK</p>
          <h2 className="mt-8 max-w-3xl text-6xl font-medium leading-[.9] tracking-[-.06em] sm:text-8xl">
            Every frame
            <br />
            <span className="font-display">matters.</span>
          </h2>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[.28em] text-black/45">05 — PROCESS</p>
          <h2 className="text-5xl font-medium tracking-[-.05em] sm:text-7xl">How We <span className="font-display">Work.</span></h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Send Your Footage", "Kirim footage dan brief yang ingin kamu edit."],
              ["02", "We Shape The Story", "Kami menyusun footage, pacing, music, transition, dan visual."],
              ["03", "Refine The Details", "Color grading, sound, typography, dan detail lainnya disempurnakan."],
              ["04", "Ready To Post", "Video final siap digunakan untuk social media atau kebutuhan lainnya."]
            ].map(([num, title, desc]) => (
              <div key={num} className="rounded-3xl border border-black/10 p-6">
                <span className="text-xs text-black/35">{num}</span>
                <h3 className="mt-14 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-[#e9e7df] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.55fr_1fr]">
          <p className="text-[10px] font-semibold tracking-[.28em] text-black/45">06 — ABOUT</p>
          <div>
            <h2 className="text-5xl font-medium tracking-[-.05em] sm:text-7xl">Behind <span className="font-display">Tsanii Visual.</span></h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-black/55">
              Tsanii Visual lahir dari ketertarikan pada visual, storytelling, dan detail kecil yang membuat sebuah video terasa berbeda.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Creative", "Detail-oriented", "Visual-driven"].map((x) => <span key={x} className="rounded-full border border-black/10 px-4 py-2 text-xs">{x}</span>)}
            </div>
            <div className="mt-12 border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-[.2em] text-black/40">Tools we use</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Adobe Photoshop"].map((x) => <span key={x} className="rounded-full bg-white/60 px-4 py-2 text-xs">{x}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="grain mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#b8a9c9] px-6 py-20 sm:px-12 lg:py-28">
          <p className="text-[10px] font-semibold tracking-[.28em] text-black/45">08 — START A PROJECT</p>
          <h2 className="mt-7 max-w-4xl text-6xl font-medium leading-[.9] tracking-[-.06em] sm:text-8xl">Got footage?<br /><span className="font-display">Let&apos;s make it feel different.</span></h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-black/55">Kalau kamu punya footage yang masih mentah, kirim aja. Kita lihat bagaimana visualnya bisa dibuat lebih menarik.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#181818] px-5 py-3 text-sm font-semibold text-white">Let&apos;s Talk on WhatsApp <ArrowUpRight size={16} /></a>
            <a href="#works" className="flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">View Our Works</a>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
