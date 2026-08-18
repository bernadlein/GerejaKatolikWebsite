<script setup lang="ts">
import { homePageConfig } from '~/config/home'
import { parishConfig } from '~/config/parish'

const hero = homePageConfig.hero
</script>

<template>
  <section
    class="relative isolate min-h-[680px] overflow-hidden bg-church-900"
  >
    <!-- Background decorative -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(183,147,74,0.24),transparent_32%)]"
    />

    <div
      class="absolute inset-0 bg-[linear-gradient(115deg,#3c1018_0%,#561522_48%,#3c1018_100%)]"
    />

    <!-- Decorative circles -->
    <div
      class="absolute -right-32 -top-32 size-[480px] rounded-full border border-white/10"
    />

    <div
      class="absolute -right-10 top-10 size-[300px] rounded-full border border-white/10"
    />

    <div
      class="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8"
    >
      <!-- LEFT CONTENT -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3">
          <span class="h-px w-10 bg-gold-500" />

          <p
            class="text-xs font-bold uppercase tracking-[0.28em] text-gold-500"
          >
            {{ hero.eyebrow }}
          </p>
        </div>

        <h1
          class="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
        >
          {{ hero.title }}
        </h1>

        <p
          class="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
        >
          {{ hero.description }}
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <NuxtLink
            :to="hero.primaryAction.to"
            class="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            {{ hero.primaryAction.label }}

            <span
              aria-hidden="true"
              class="ml-2"
            >
              →
            </span>
          </NuxtLink>

          <NuxtLink
            :to="hero.secondaryAction.to"
            class="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {{ hero.secondaryAction.label }}
          </NuxtLink>
        </div>

        <!-- Parish information -->
        <div
          class="mt-12 grid max-w-2xl gap-6 border-t border-white/15 pt-7 sm:grid-cols-2"
        >
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-white/40"
            >
              Lokasi
            </p>

            <p class="mt-2 text-sm leading-6 text-white/75">
              Medokan Semampir
              <br>
              Surabaya
            </p>
          </div>

          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-white/40"
            >
              Diresmikan
            </p>

            <p class="mt-2 text-sm leading-6 text-white/75">
              1 November 2025
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT / LOGO -->
      <div
        class="relative flex items-center justify-center lg:justify-end"
      >
        <div
          class="relative flex aspect-square w-full max-w-[430px] items-center justify-center"
        >
          <!-- Outer circle -->
          <div
            class="absolute inset-0 rounded-full border border-white/10"
          />

          <div
            class="absolute inset-8 rounded-full border border-white/10"
          />

          <!-- Glow -->
          <div
            class="absolute inset-20 rounded-full bg-gold-500/10 blur-3xl"
          />

          <!-- Logo card -->
          <div
            class="relative flex size-[280px] items-center justify-center rounded-full bg-white p-10 shadow-2xl shadow-black/20 sm:size-[320px]"
          >
            <img
              :src="parishConfig.branding.logo"
              :alt="`Logo ${parishConfig.name}`"
              class="h-full w-full object-contain"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom accent -->
    <div
      class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
    />
  </section>
</template>
