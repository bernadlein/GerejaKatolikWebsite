<script setup lang="ts">
import { mainNavigation } from '~/config/navigation'
import { parishConfig } from '~/config/parish'
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-church-200/70 bg-church-50/90 backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
        aria-label="Kembali ke beranda"
      >
        <img
          :src="parishConfig.branding.logo"
          :alt="`Logo ${parishConfig.name}`"
          class="size-12 object-contain"
        >

        <div>
          <p
            class="font-display text-lg font-bold leading-none text-church-900"
          >
            {{ parishConfig.name }}
          </p>

          <p class="mt-1 text-xs text-stone-500">
            {{ parishConfig.churchName }}
          </p>
        </div>
      </NuxtLink>

      <nav
        class="hidden items-center gap-7 lg:flex"
        aria-label="Navigasi utama"
      >
        <NuxtLink
          v-for="item in mainNavigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-stone-700 transition hover:text-church-700"
          active-class="text-church-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <AppButton
        to="/jadwal"
        class="hidden sm:inline-flex"
      >
        Jadwal Misa
      </AppButton>
    </div>
  </header>
</template>
