import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@material-ui/icons": "@material-ui/icons/esm",
      "@material-ui/core": "@material-ui/core/esm",
      "@material-ui/lab": "@material-ui/lab/esm",
    },
  },
});
