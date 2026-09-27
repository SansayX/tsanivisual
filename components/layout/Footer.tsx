import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-black/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-bold">{siteConfig.brandName}</p>
          <p className="mt-2 text-sm text-black/45">Video editing for stories worth watching.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs text-black/55">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#works" className="hover:text-black">Works</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-black">Instagram</a>
          <a href={siteConfig.tiktok} target="_blank" rel="noreferrer" className="hover:text-black">TikTok</a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 text-[10px] uppercase tracking-[.18em] text-black/35 sm:flex-row sm:justify-between">
        <span>© 2026 Tsanii Visual. All rights reserved.</span>
        <span>Creative studio • Made for the frame.</span>
      </div>
    </footer>
  );
}
