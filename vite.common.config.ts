import rc from "rc";
import react from "@vitejs/plugin-react";
import { name as service, version } from "./package.json";
import tsconfig from "./tsconfig.json";
const rawConfigs = rc(
  "service",
  {
    // Defaults
    service,
    version,
  },
  null
);

const appConfigs = Object.keys(rawConfigs).reduce((configs, key) => {
  if (key.toString().startsWith("env_")) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    configs[key.replace("env_", "")] = rawConfigs[key];
  }
  return configs;
}, {});

const { build } = (() => {
  const build = {
    target: "es6",
    outDir: "dist",
  };
  if (tsconfig?.compilerOptions && tsconfig?.compilerOptions?.target)
    build["target"] = tsconfig?.compilerOptions.target;
  return {
    build,
  };
})();

export default {
  plugins: [react()],
  build: {
    target: "es6",
    outDir: "dist",
  },
  define: {
    __CONFIGS__: JSON.stringify(appConfigs),
  },
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: "" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
