# Stephanie Liang — Video Editing Portfolio

Standalone English video-editing portfolio built with Next.js. The homepage contains the complete player, filters, playlist, editing capabilities and contact details.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub and Vercel

1. Create an empty GitHub repository.
2. Upload every file and folder from this project, including the `public/editing` videos.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Keep the detected framework as **Next.js** and click **Deploy**.

No environment variables are required.

## Important media note

The local MP4 files are stored directly in `public/editing`. Each file is below GitHub's 100 MB per-file limit. The Future Travel project uses Google Drive embedding, and Bake Cake Shakedown uses YouTube embedding, so those two videos depend on their existing sharing permissions.

## Main files

- `app/page.tsx` — portfolio content, videos, filters and player logic
- `app/globals.css` — complete desktop and mobile styling
- `public/editing/` — local videos and poster images
- `public/projects/` — poster images for embedded videos
