import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

const viteBaseConfig = {
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [
    react(),
    createHtmlPlugin({
      entry: "src/index.tsx",
      minify: true,
    }),
  ],
};
export default viteBaseConfig;
