<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

const {
  communities,
  status,
  error,
} = useCommunities()

useSeoMeta({
  title:
    `Komunitas & Pelayanan | ${parishConfig.name}`,

  description:
    `Komunitas, kelompok kategorial, dan pelayanan umat ${parishConfig.churchName}.`,
})
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-church-900"
    >
      <div
        class="absolute -right-40 -top-40 size-[520px] rounded-full border border-white/10"
      />

      <div
        class="absolute right-14 top-14 size-[280px] rounded-full border border-white/10"
      />

      <div
        class="absolute -bottom-28 left-1/3 size-72 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div
        class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-px w-9 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-gold-500"
          >
            Bertumbuh Bersama
          </p>
        </div>

        <h1
          class="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight text-white sm:text-6xl"
        >
          Komunitas & Pelayanan
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-8 text-white/60"
        >
          Ruang bagi umat untuk bertumbuh,
          melayani, membangun persaudaraan,
          dan mengambil bagian dalam
          kehidupan {{ parishConfig.name }}.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section
      class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
    >
      <!-- Intro -->
      <div
        class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
          >
            Kehidupan Umat
          </p>

          <h2
            class="mt-3 font-display text-3xl font-bold leading-tight text-church-900 sm:text-4xl"
          >
            Temukan Ruang untuk Bertumbuh
          </h2>
        </div>

        <p
          class="max-w-2xl text-sm leading-7 text-stone-500"
        >
          Kenali komunitas dan kelompok
          pelayanan yang menjadi bagian
          dari kehidupan umat Paroki
          St. Yosafat.
        </p>
      </div>

      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in 6"
          :key="item"
          class="h-[380px] animate-pulse rounded-[2rem] bg-stone-200"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p class="font-semibold text-red-900">
          Informasi komunitas belum dapat dimuat.
        </p>
      </div>

      <!-- Grid -->
      <div
        v-else-if="communities.length"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <CommunityCard
          v-for="community in communities"
          :key="community.id"
          :community="community"
        />
      </div>

      <!-- Empty -->
      <CommunityEmptyState
        v-else
        class="mt-10"
      />

      <!-- JOIN CTA -->
      <div
        class="relative mt-16 overflow-hidden rounded-[2.25rem] bg-church-900 p-8 text-white sm:p-10 lg:p-12"
      >
        <div
          class="absolute -right-24 -top-24 size-72 rounded-full border border-white/10"
        />

        <div
          class="absolute right-16 top-12 size-44 rounded-full border border-white/10"
        />

        <div
          class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl">
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Ambil Bagian
            </p>

            <h2
              class="mt-3 font-display text-3xl font-bold sm:text-4xl"
            >
              Mari Bertumbuh dan Melayani Bersama
            </h2>

            <p
              class="mt-4 max-w-xl leading-7 text-white/60"
            >
              Hubungi paroki untuk mendapatkan
              informasi mengenai komunitas dan
              pelayanan yang dapat diikuti.
            </p>
          </div>

          <NuxtLink
            to="/kontak"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            Hubungi Paroki

            <span class="ml-2">
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
