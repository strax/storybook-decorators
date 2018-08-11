import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import commonjs from "rollup-plugin-commonjs";

import * as pkg from "./package.json";

const dependencies = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });

export default {
  input: "src/index.tsx",
  output: [{
    format: "es",
    file: "dist/index.es.js",
    sourcemap: true
  }, {
    format: "cjs",
    file: "dist/index.js",
    sourcemap: true
  }],
  external: dependencies,
  plugins: [
    typescript(),
    url(),
  ]
}
