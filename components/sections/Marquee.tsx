const words = ["VIDEO EDITING", "COLOR GRADING", "CINEMATIC", "AESTHETIC", "STORYTELLING"];

export function Marquee() {
  const line = words.join(" • ") + " • ";
  return (
    <div className="overflow-hidden border-y border-black/10 py-5">
      <div className="marquee-track flex text-xs font-semibold tracking-[.22em] text-black/55">
        <span className="pr-8">{line.repeat(3)}</span>
        <span className="pr-8">{line.repeat(3)}</span>
      </div>
    </div>
  );
}
