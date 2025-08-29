import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
      scale: 1.2
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      '0630d205-839c-474a-aeb3-e30da51c8af1-00-22c37259gz0aq.pike.replit.dev',
      '.replit.dev',
      '.replit.app',
      'localhost',
      '127.0.0.1'
    ]
  }
})