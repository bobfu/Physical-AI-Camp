import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const cohortPage = path.join(
    process.cwd(),
    process.env.NODE_ENV !== "production" ? 'public' : 'dist',
    'projects',
    'index.html'
  );

  app.get(['/physical-ai-camp/cohort', '/physical-ai-camp/cohort/', '/physical-ai-camp/cohort/:projectId'], (_req, res) => {
    res.sendFile(cohortPage);
  });

  app.get('/physical-ai-camp/projects/index.html', (_req, res) => {
    res.redirect(302, '/physical-ai-camp/cohort');
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA Fallback: Send index.html for any request that doesn't match a static file
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
