import { fileURLToPath } from "node:url";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude],
        root: fileURLToPath(new URL("./", import.meta.url))
    }
});
