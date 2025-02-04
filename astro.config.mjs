import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  site: "https://thelastdistrict.com",
  base: "https://github.com/shaunbevan/thelastdistrict.com",
});
