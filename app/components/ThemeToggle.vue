<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () =>
	colorMode.value === "light"
		? (colorMode.preference = "dark")
		: (colorMode.preference = "light");
</script>

<template>
	<button
		aria-label="Color Mode"
		class="w-10 h-10 flex items-center justify-center text-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/25 hover:bg-zinc-200 dark:hover:bg-zinc-700 *:text-zinc-950 dark:*:text-zinc-300 focus-visible:global-focus"
		@click="onClick"
	>
		<ColorScheme placeholder="...">
			<template v-if="colorMode.value === 'dark'">
				<Icon name="ph:sun-duotone" class="w-5 h-5" />
				<span class="sr-only">Dark Mode</span>
			</template>
			<template v-else>
				<Icon name="ph:moon-duotone" class="w-5 h-5" />
				<span class="sr-only">Light Mode</span>
			</template>
		</ColorScheme>
	</button>
</template>
