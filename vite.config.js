import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Configure assets
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg']
  },
})
