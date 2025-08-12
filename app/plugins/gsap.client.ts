import { gsap } from "gsap";

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			gsap,
		},
	};
});
