/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test:{
    globals: true,
    include: ['src/**/*.spec.tsx'],
    environment: 'jsdom',
    coverage: { 
      provider: 'v8',
      reporter: ['lcov', 'html'],
      reportsDirectory: 'coverage',
      all: true,
      include: [ '**/src/**/*.template.tsx','**/src/**/*.component.tsx']
    },
    setupFiles: './vitest.setup.ts'
  }
})