import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lite.minch.dev",
  integrations: [tailwind(), icon()],
  devToolbar: {
    enabled: false
  },
  vite: {
    ssr: {
      noExternal: ["gsap"]
    }
  }
});
