# Tsanii Visual

Aesthetic, cinematic video-editing studio website built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide React.

## 1. Installation

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Open http://localhost:3000.

## 3. Build

```bash
npm run build
```

## 4. Production

```bash
npm run start
```

## 5. Customize the brand

Edit `lib/config.ts`. This is the main configuration file for:

- Brand name
- Description
- WhatsApp
- Email
- Instagram
- TikTok
- Site URL
- Services
- Portfolio
- FAQ

Replace the dummy SVG portfolio visuals in `public/images/` with your own thumbnails when ready.

For a real portfolio video, add files to `public/videos/` and replace the `VideoShowcase` placeholder with a `<video>` element using a poster image.

## 6. GitHub

```bash
git init
git add .
git commit -m "Initial Tsanii Visual website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## 7. Vercel

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Framework should be detected as Next.js.
5. Add environment variables only if you introduce private integrations.
6. Deploy.

## Notes

The contact form intentionally opens WhatsApp rather than pretending to submit to a backend. Replace the number in `lib/config.ts` before publishing.

The portfolio entries and testimonial-style content are placeholders and must not be presented as real client work or testimonials until replaced with genuine material.
