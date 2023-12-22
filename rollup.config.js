import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from "rollup-plugin-image";
import copy from "rollup-plugin-copy";
import commonjs from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      assetFileNames: "assets/[name][extname]",
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
      assetFileNames: "assets/[name][extname]",
    },
  ],
  plugins: [
    json(),
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
      ],
    }),
    external(),
    resolve(),
    commonjs(),
    terser(),
    image(),
    copy({
      targets: [
        { src: "src/assets/**/**/*", dest: "dist/assets", verbose: true },
      ],
    }),
  ],
  external: ["react-router-dom"],
};
