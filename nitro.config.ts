import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: {
    autoImport: true, // Enable auto-imports for Nitro utilities like useRuntimeConfig
  },
  routeRules: {
    '/api/masumi/start_job': { proxy: '/api/masumi/job' }
  },
  runtimeConfig: {
    // Server-only variables (private)
    databaseUrl: process.env.DATABASE_URL,
    
    // Public variables (accessible on client-side too)
    public: {
      // apiBaseUrl: process.env.PUBLIC_API_BASE_URL,
    }
  }
});
