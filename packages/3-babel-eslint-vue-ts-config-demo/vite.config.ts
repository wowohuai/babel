import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import path from 'path';

export default defineConfig({
  server: {
    port: 9000,
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      site: path.resolve(__dirname, '../site'),
      '@ant-design/icons/lib/dist': '@ant-design/icons/lib/index.es.js'
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  plugins: [
    viteCommonjs(),
    createVuePlugin({
      jsx: true
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
