import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./index.js",
  output: [
    {
      file: "./app/dist/xeokit-bim-viewer.es.js",
      format: "es",
      name: "bundle",
    },
    // {
    //   file: "./app/dist/xeokit-bim-viewer.umd.js",
    //   format: "umd",
    //   name: "bundle",
    // },
  ],
  plugins: [nodeResolve(), terser()],
};
