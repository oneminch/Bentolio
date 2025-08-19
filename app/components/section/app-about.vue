<script lang="ts" setup>
  const { portfolio, style } = useAppConfig();

  const { bio } = portfolio;

  const { roundedItems } = style;
</script>

<template>
  <div class="grid-rows-1">
    <p
      v-if="bio.html"
      :class="[
        'animate-element leading-relaxed col-span-full font-medium gap-4 py-6! sm:py-10! text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl lg:text-2xl',
        { 'rounded-lg': roundedItems }
      ]"
      v-html="bio.html"></p>
    <p
      v-else
      :class="[
        'animate-element leading-relaxed col-span-full font-medium gap-4 py-6! sm:py-10! text-zinc-700 dark:text-zinc-300 text-lg sm:text-xl lg:text-2xl',
        { 'rounded-lg': roundedItems }
      ]">
      {{ bio.text }}
    </p>
  </div>
</template>
