<script lang="ts" setup>
  import type { SocialMediaKey } from "~";

  const { portfolio, style } = useAppConfig();

  const { name, subtitle, avatar, company, socials } = portfolio;

  const { roundedItems } = style;

  const topFourSocials = Object.fromEntries(
    Object.entries(socials).slice(0, 4)
  );

  const numSocials = Object.entries(topFourSocials).length;
  const socialLinkClass = {
    "col-span-full lg:col-span-4 lg:row-span-2": numSocials === 1,
    "col-span-6 lg:col-span-4": numSocials === 2,
    "col-span-4 last:col-span-4 lg:col-span-2 lg:last:col-span-4":
      numSocials === 3,
    "col-span-3 lg:col-span-2": numSocials === 4
  };
</script>

<template>
  <div class="grid-rows-2">
    <!-- Intro -->
    <div
      :class="[
        'animate-element col-span-full lg:col-span-8 row-span-2',
        { 'rounded-lg': roundedItems }
      ]">
      <img
        v-if="avatar"
        :src="avatar"
        alt="My Profile Picture"
        class="size-20 mb-4 mx-auto lg:mx-0 bg-transparent rounded-full ring ring-zinc-200 dark:ring-zinc-800 p-0.5" />

      <div class="space-y-4 py-6 sm:pb-8">
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-bold *:inline-block">
          Hi, I'm {{ name }}
          <span id="wave">👋</span>
        </h1>
        <h2
          class="text-center lg:text-left font-bold *:inline-block text-zinc-500 dark:text-primary text-xl sm:text-2xl lg:text-3xl">
          <span>{{ subtitle }}</span
          ><span v-if="company">&nbsp;@&nbsp;{{ company }}</span>
        </h2>
      </div>
    </div>

    <!-- Social Media -->
    <template v-for="(item, key) in topFourSocials" :key="key">
      <social-media-link
        v-if="item"
        :to="item.profileUrl"
        :name="key as SocialMediaKey"
        :icon="item.socialMediaIcon"
        :style="{
          backgroundColor: item.socialMediaBgColor,
          textColor: item.socialMediaTextColor,
          borderColor: item.socialMediaBorderColor
        }"
        :class="[
          'animate-element',
          socialLinkClass,
          { 'rounded-lg': roundedItems }
        ]" />
    </template>
  </div>
</template>
