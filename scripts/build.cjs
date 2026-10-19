const { spawnSync } = require("node:child_process");
const { existsSync, rmSync } = require("node:fs");

const entry = existsSync("index.html") ? "index.html" : "index.htm";
rmSync("dist", { recursive: true, force: true });

const result = spawnSync(
  process.execPath,
  [
    require.resolve("parcel/lib/bin.js"),
    "build",
    entry,
    "docs/**/*.html",
    "--dist-dir",
    "dist",
    "--public-url",
    "./",
    "--no-source-maps",
  ],
  { stdio: "inherit" },
);

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
