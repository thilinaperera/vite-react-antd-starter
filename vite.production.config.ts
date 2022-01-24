import { defineConfig } from "vite";
import commonConfig from "./vite.common.config";

export default defineConfig({
  ...commonConfig,
  build: {
    ...commonConfig.build,
    sourcemap: true,
  },
});
