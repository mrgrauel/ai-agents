import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: {
    autoImport: true, // Enable auto-imports for Nitro utilities like useRuntimeConfig
    dts: false,
  },
  runtimeConfig: {
    // Server-only variables (private)
    databaseUrl: process.env.DATABASE_URL,
    environment: process.env.NODE_ENV || "development",
    
    // Public variables (accessible on client-side too)
    public: {
      // apiBaseUrl: process.env.PUBLIC_API_BASE_URL,
    }
  }
});
