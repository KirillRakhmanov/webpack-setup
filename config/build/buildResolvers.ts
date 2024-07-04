import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(optios: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": optios.paths.src,
    },
  };
}
