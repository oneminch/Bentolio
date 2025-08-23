<script setup lang="ts">
  const colorMode = useColorMode();
  const { style } = useAppConfig();

  const { roundedItems } = style;

  const onClick = () =>
    colorMode.value === "light"
      ? (colorMode.preference = "dark")
      : (colorMode.preference = "light");
</script>

<template>
  <button
    aria-label="Color Mode"
    :class="[
      'w-10 h-10 flex items-center justify-center text-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/25 hover:bg-zinc-200 dark:hover:bg-zinc-700 *:text-zinc-950 dark:*:text-zinc-300 focus-visible:global-focus',
      { 'rounded-lg': roundedItems }
    ]"
    @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.preference === 'dark'" name="ph:sun-duotone" />
      <Icon v-else name="ph:moon-duotone" />
    </ColorScheme>
  </button>
</template>
