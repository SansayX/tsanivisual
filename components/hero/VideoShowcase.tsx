import { Play } from "lucide-react";

export function VideoShowcase() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[410px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#d8d6cf] shadow-2xl shadow-black/10 sm:aspect-[3/4]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.8),transparent_28%),linear-gradient(145deg,#b9c3b2,#77756e_55%,#292929)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.45)_48%,transparent_50%)]" />
      <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[9px] tracking-[.25em] text-white backdrop-blur">
        SHOWREEL / 01
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
        <div className="text-white">
          <p className="text-[10px] tracking-[.3em] text-white/60">VISUAL STUDY</p>
          <p className="mt-1 text-2xl font-medium">Frame the feeling.</p>
        </div>
        <button aria-label="Play showreel" className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105">
          <Play size={18} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
