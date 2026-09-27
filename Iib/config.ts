export const siteConfig = {
  brandName: "Tsanii Visual",
  eyebrow: "VIDEO EDITING STUDIO",
  tagline: "Your footage. Our visual touch.",
  description:
    "Tsanii Visual membantu mengubah footage menjadi video yang clean, cinematic, dan aesthetic untuk social media dan kebutuhan kreatif lainnya.",
  whatsapp: "6281234567890", // GANTI dengan nomor WhatsApp asli, tanpa + atau spasi.
  email: "hello@tsaniivisual.com", // GANTI jika sudah memiliki email bisnis.
  instagram: "https://instagram.com/tsaniivisual", // GANTI.
  tiktok: "https://tiktok.com/@tsaniivisual", // GANTI.
  siteUrl: "https://tsanii-visual.vercel.app", // GANTI setelah deploy jika memakai domain sendiri.
  services: [
    {
      number: "01",
      title: "Short Form Editing",
      description: "Editing TikTok, Reels, dan Shorts dengan pacing dinamis dan visual yang clean."
    },
    {
      number: "02",
      title: "Cinematic Editing",
      description: "Membangun mood cinematic melalui cut, sound, color, dan storytelling."
    },
    {
      number: "03",
      title: "Color Grading",
      description: "Menyesuaikan warna agar footage memiliki mood dan karakter visual yang konsisten."
    },
    {
      number: "04",
      title: "Aesthetic Content",
      description: "Editing untuk lifestyle, fashion, travel, beauty, daily vlog, dan konten aesthetic."
    },
    {
      number: "05",
      title: "Social Media Content",
      description: "Editing video yang disesuaikan dengan format dan kebutuhan social media."
    }
  ],
  portfolio: [
    { id: "late-afternoon", title: "Late Afternoon", category: "Lifestyle / Cinematic", image: "/images/project-01.svg", description: "Dummy project untuk menampilkan treatment lifestyle yang warm dan cinematic.", style: "Warm cinematic / slow pacing", tools: "Premiere Pro / After Effects" },
    { id: "sunday-routine", title: "Sunday Routine", category: "Daily / Aesthetic", image: "/images/project-02.svg", description: "Dummy project untuk konten daily dengan cut yang ringan dan intimate.", style: "Clean / soft / editorial", tools: "Premiere Pro / Lightroom" },
    { id: "after-the-rain", title: "After The Rain", category: "Cinematic", image: "/images/project-03.svg", description: "Dummy project untuk eksplorasi mood setelah hujan.", style: "Moody / cinematic", tools: "DaVinci Resolve / After Effects" },
    { id: "city-lights", title: "City Lights", category: "Travel / Lifestyle", image: "/images/project-04.svg", description: "Dummy project untuk footage kota dengan visual malam yang minimal.", style: "Night / urban / grain", tools: "Premiere Pro / DaVinci Resolve" }
  ],
  faqs: [
    ["Berapa lama proses editing?", "Waktu pengerjaan menyesuaikan jenis video dan brief. Silakan kirim detail project melalui WhatsApp untuk estimasi."],
    ["Apakah bisa request style tertentu?", "Bisa. Kirim referensi visual atau contoh video yang kamu suka agar arah editing lebih mudah disamakan."],
    ["Apakah bisa revisi?", "Bisa, detail jumlah dan ketentuan revisi dapat dikonfirmasi saat brief project."],
    ["Apakah bisa edit video TikTok/Reels?", "Bisa. Short-form seperti TikTok, Reels, dan Shorts termasuk layanan yang dapat dikerjakan."],
    ["Bagaimana cara mengirim footage?", "Metode pengiriman footage dapat disesuaikan dengan ukuran file, misalnya cloud storage atau layanan transfer file."],
    ["Bagaimana cara melakukan pembayaran?", "Metode dan ketentuan pembayaran dapat dikonfirmasi sebelum project dimulai."]
  ]
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Halo Tsanii Visual, saya tertarik dengan jasa editing video. Saya ingin konsultasi mengenai project saya."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
