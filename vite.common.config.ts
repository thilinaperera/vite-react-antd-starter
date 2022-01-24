import rc from "rc";
import react from "@vitejs/plugin-react";
import { name as service, version } from "./package.json";
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

export default {
  plugins: [react()],
  build: {
    target: "es6",
    outDir: "dist",
  },
  define: {
    __CONFIGS__: JSON.stringify(appConfigs),
  },
};
