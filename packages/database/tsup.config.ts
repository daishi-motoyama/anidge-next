import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: [/generated/],
  format: ["cjs", "esm"],
  sourcemap: true,
});
