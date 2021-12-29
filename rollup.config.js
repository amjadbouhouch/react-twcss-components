import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import visualizer from "rollup-plugin-visualizer";
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: "node_module/**",
        presets: ["@babel/preset-react"],
      }),
      postcss({
        // extensions: ['css', '.less'],
        minimize: true,
        modules: true,
        use: {
          sass: null,
          stylus: null,
          less: { javascriptEnabled: true },
        }, //, modifyVars: antdVars }},,
        extract: true,
        config: {
          path: "./postcss.config.js",
          ctx: null,
        },
      }),
      external(),
      resolve(),

      terser(),
      visualizer({
        filename: "bundle-analysis.html",
        open: true,
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
      }),
    ],
    external: ["react", "react-dom", "tailwindcss"],
  },
];
