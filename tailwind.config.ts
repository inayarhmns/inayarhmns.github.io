import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#240010",
        "primary-cream": "#FFF1E0",
      },
      backgroundImage: theme => ({
        "primary-bg": "radial-gradient(176.42% 113.35% at 20.76% 45.41%, #617C65 1.66%, #6F7C66 25.7%, #8AA593 61.96%)",
      }),
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};
export default config;
