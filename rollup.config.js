// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
// import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        // sourcemap: true,
        name: "react-lib",
      },
    ],
    plugins: [
      babel({
        exclude: "node_module/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
// export default {
//   input: "src/index.ts",
//   output: [
//     {
//       file: packageJson.main,
//       format: "cjs",
//       sourcemap: true,
//       name: "react-lib",
//     },
//     {
//       file: packageJson.module,
//       format: "esm",
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: "./tsconfig.json" }),
//     postcss(),
//     terser(),
//   ],
// };
