import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
export default defineConfig(() => {
  return {
    plugins: [react(), macrosPlugin()],
    css: {
      modules: true, // set CSS Modules
    },
  };
});
