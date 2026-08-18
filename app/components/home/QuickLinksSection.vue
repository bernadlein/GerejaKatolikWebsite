<script setup lang="ts">
import { homePageConfig } from '~/config/home'

const quickLinks = homePageConfig.quickLinks
</script>

<template>
  <section class="bg-white">
    <div
      class="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <!-- Section heading -->
      <div class="max-w-2xl">
        <div class="flex items-center gap-3">
          <span class="h-px w-8 bg-gold-500" />

          <p
            class="text-xs font-bold uppercase tracking-[0.22em] text-gold-500"
          >
            {{ quickLinks.eyebrow }}
          </p>
        </div>

        <h2
          class="mt-4 font-display text-3xl font-bold tracking-tight text-church-900 sm:text-4xl"
        >
          {{ quickLinks.title }}
        </h2>

        <p
          class="mt-4 max-w-xl text-base leading-7 text-stone-600"
        >
          {{ quickLinks.description }}
        </p>
      </div>

      <!-- Quick access cards -->
      <div
        class="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="item in quickLinks.items"
          :key="item.id"
          :to="item.to"
          class="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-stone-900/5 sm:p-7"
        >
          <!-- subtle background decoration -->
          <div
            class="absolute -right-10 -top-10 size-28 rounded-full bg-church-50 transition duration-300 group-hover:scale-125 group-hover:bg-gold-500/10"
          />

          <div class="relative">
            <!-- Icon -->
            <div
              class="flex size-12 items-center justify-center rounded-2xl bg-church-50 text-church-800 transition duration-300 group-hover:bg-church-900 group-hover:text-white"
            >
              <QuickLinkIcon
                :name="item.icon"
                class="size-6"
              />
            </div>

            <!-- Content -->
            <h3
              class="mt-6 font-display text-xl font-bold text-church-900"
            >
              {{ item.title }}
            </h3>

            <p
              class="mt-3 min-h-[72px] text-sm leading-6 text-stone-600"
            >
              {{ item.description }}
            </p>

            <!-- CTA -->
            <div
              class="mt-6 flex items-center text-sm font-semibold text-church-800"
            >
              <span>
                Selengkapnya
              </span>

              <span
                aria-hidden="true"
                class="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
