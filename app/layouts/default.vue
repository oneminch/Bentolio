<script setup lang="ts">
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import gsap from "gsap";

const { portfolio } = useAppConfig();

const { name, subtitle, bio } = portfolio;

const { $gsap } = useNuxtApp();

const ctx = ref<gsap.Context | null>(null);

onMounted(() => {
	ctx.value = $gsap.context(() => {
		$gsap.fromTo(
			".animate-layout",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.75,
				delay: 0.5,
				ease: "elastic.out(0.5, 0.3)",
			}
		);
		$gsap.fromTo(
			".animate-element",
			{ scale: 0.75, opacity: 0, y: 20 },
			{
				scale: 1,
				opacity: 1,
				y: 0,
				duration: 0.15,
				delay: 0.9,
				ease: "elastic.out(0.5, 0.3)",
				stagger: 0.1,
			}
		);
	});
});

onUnmounted(() => {
	ctx.value && ctx.value.revert();
});

useHead({
	bodyAttrs: {
		class: "animate-layout opacity-0",
	},
});

useSeoMeta({
	title: `${name} · ${subtitle}`,
	description: bio.text,
	ogTitle: `${name} · ${subtitle}`,
	ogDescription: bio.text,
	twitterCard: "summary_large_image",
});
</script>

<template>
	<div class="space-y-5 sm:space-y-10">
		<app-header />

		<main class="min-h-full">
			<slot />
		</main>

		<app-footer />
	</div>
</template>
