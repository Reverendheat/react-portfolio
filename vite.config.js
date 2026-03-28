import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const awsExportsUser = path.resolve(__dirname, 'src/aws-exports.js');
const awsExportsFallback = path.resolve(__dirname, 'src/aws-exports.example.js');

export default defineConfig({
  // aws-amplify v4 → buffer expects Node's `global`; browsers only have globalThis.
  define: {
    global: 'globalThis',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@amplify-config': fs.existsSync(awsExportsUser)
        ? awsExportsUser
        : awsExportsFallback,
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
