import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: { environment: 'jsdom', setupFiles: ['./test/setupTest.js'], globals: true, coverage: { provider: 'v8' } },
  base: '/Proyecto-linea-enfasis3/',
});
