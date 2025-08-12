<script setup lang="ts">
  import type { SocialMediaKey } from "~";

  const { portfolio, style } = useAppConfig();

  const {
    name,
    subtitle,
    avatar,
    company,
    bio,
    cta: { contact, location, link },
    socials
  } = portfolio;

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

  defineOgImageComponent("SocialImage", {
    name: name,
    subtitle: subtitle,
    avatar: avatar
  });
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <article
      class="flex flex-col gap-4 *:grid *:grid-cols-12 *:gap-4 *:w-full *:*:min-h-16 *:*:py-4 *:*:px-6 sm:*:*:py-6 sm:*:*:px-10 *:*:border *:*:border-zinc-200 dark:*:*:border-zinc-700 *:*:bg-zinc-50/50 dark:*:*:bg-zinc-800/25 *:text-zinc-950 dark:*:text-zinc-300">
      <!-- Hero -->
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
        <social-media-link
          v-for="(item, key) in topFourSocials"
          :key="key"
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
      </div>

      <!-- About -->
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

      <!-- Miscellany -->
      <div
        class="grid-rows-1 grid-cols-1! sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]!">
        <!-- Link -->
        <nuxt-link
          v-if="link"
          :to="link.url"
          :class="[
            'animate-element flex flex-col items-center justify-center gap-y-2 focus-visible:global-focus hover:scale-105!',
            { 'rounded-lg': roundedItems }
          ]">
          <Icon
            name="ph:arrow-square-up-right-duotone"
            class="text-3xl lg:text-4xl text-primary" />
          <span class="text-center text-lg">
            {{ link.label }}
          </span>
        </nuxt-link>

        <!-- Location -->
        <p
          :class="[
            'animate-element flex flex-col items-center justify-center gap-y-2',
            { 'rounded-lg': roundedItems }
          ]">
          <Icon
            name="ph:map-pin-duotone"
            class="text-3xl lg:text-4xl text-primary" />
          <span class="text-center text-lg"> {{ location }} </span>
        </p>

        <!-- Contact -->
        <p
          :class="[
            'animate-element flex flex-col items-center justify-center gap-y-2',
            { 'rounded-lg': roundedItems }
          ]">
          <Icon
            name="ph:chat-circle-text-duotone"
            class="text-3xl lg:text-4xl text-primary" />
          <span class="text-center text-lg">
            {{ contact }}
          </span>
        </p>
      </div>
    </article>
  </NuxtLayout>
</template>
