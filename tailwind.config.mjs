import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		daisyui,
		typography
	],
	daisyui: {
		themes: ["cupcake", "dracula"],
		darkTheme: "dracula",
	}
}
