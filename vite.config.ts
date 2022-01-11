import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

const config: UserConfig = {
  resolve: {
    alias: {
      // We can now `import '@/path/to/module'` where `~` references the project root
      '@': __dirname,
    },
  },
  plugins: [
    eslintPlugin(),
    WindiCSS({
      scan: {
        // By default only `src/` is scanned
        dirs: ['pages', 'components'],
        // We only have to specify the file extensions we actually use.
        fileExtensions: ['vue', 'js', 'ts', 'jsx', 'tsx', 'html', 'pug'],
      },
    }),
    react(),
    ssr(),
  ],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#ea4e65',
        },
      },
    },
  },
};

export default config;
