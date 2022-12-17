import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			include: ["src/lib/"],
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/lib/index.ts"),
			name: "ReactDebounce",
			fileName: "react-debounce",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "react",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
