<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

useSeoMeta({
  title:
    `Pelayanan Sakramen | ${parishConfig.name}`,

  description:
    `Informasi pelayanan Sakramen di ${parishConfig.churchName}.`,
})

const {
  sacraments,
  status,
  error,
} = useSacraments()
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-church-900"
    >
      <div
        class="absolute -right-32 -top-32 size-[450px] rounded-full border border-white/10"
      />

      <div
        class="absolute right-10 top-12 size-[260px] rounded-full border border-white/10"
      />

      <div
        class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-px w-9 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-gold-500"
          >
            Kehidupan Iman
          </p>
        </div>

        <h1
          class="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Pelayanan Sakramen
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-8 text-white/60"
        >
          Informasi pelayanan sakramental
          bagi umat {{ parishConfig.name }}
          dalam perjalanan kehidupan iman.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section
      class="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"
    >
      <!-- Intro -->
      <div
        class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <p
            class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
          >
            Pelayanan Umat
          </p>

          <h2
            class="mt-3 font-display text-3xl font-bold text-church-900 sm:text-4xl"
          >
            Temukan Pelayanan yang Dibutuhkan
          </h2>
        </div>

        <p
          class="max-w-xl text-sm leading-7 text-stone-500"
        >
          Pilih pelayanan untuk melihat
          informasi lebih lanjut dan cara
          menghubungi paroki.
        </p>
      </div>

      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in 5"
          :key="item"
          class="h-[350px] animate-pulse rounded-[2rem] bg-stone-200/60"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p class="font-semibold text-red-900">
          Informasi pelayanan belum dapat dimuat.
        </p>
      </div>

      <!-- Cards -->
      <div
        v-else
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <SacramentCard
          v-for="sacrament in sacraments"
          :key="sacrament.id"
          :sacrament="sacrament"
        />
      </div>

      <!-- Contact CTA -->
      <div
        class="relative mt-14 overflow-hidden rounded-[2rem] bg-church-900 p-7 text-white sm:p-9 lg:p-10"
      >
        <div
          class="absolute -right-20 -top-20 size-64 rounded-full border border-white/10"
        />

        <div
          class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl">
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Butuh Informasi?
            </p>

            <h2
              class="mt-3 font-display text-3xl font-bold"
            >
              Hubungi Sekretariat Paroki
            </h2>

            <p
              class="mt-3 leading-7 text-white/60"
            >
              Sekretariat dapat membantu
              memberikan informasi lebih lanjut
              mengenai pelayanan dan pendaftaran.
            </p>
          </div>

          <NuxtLink
            to="/kontak"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
          >
            Kontak Paroki
            <span class="ml-2">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
