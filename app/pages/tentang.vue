<script setup lang="ts">
import { parishConfig } from '~/config/parish'

useSeoMeta({
  title: `Tentang ${parishConfig.name}`,
  description: `Profil dan informasi ${parishConfig.churchName}.`,
})
</script>

<template>
  <main>
    <!-- Header -->
    <section class="border-b border-church-200 bg-church-50">
      <div class="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <p
          class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
        >
          Profil Paroki
        </p>

        <h1
          class="mt-3 font-display text-4xl font-bold text-church-900 sm:text-5xl"
        >
          {{ parishConfig.name }}
        </h1>

        <p class="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          {{ parishConfig.churchName }}
        </p>
      </div>
    </section>

    <!-- Profil -->
    <section
      class="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20"
    >
      <div>
        <img
          :src="parishConfig.branding.logo"
          :alt="`Logo ${parishConfig.name}`"
          class="mx-auto w-full max-w-[240px] object-contain lg:mx-0"
        >
      </div>

      <div>
        <p
          class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
        >
          Tentang Kami
        </p>

        <h2
          class="mt-3 font-display text-3xl font-bold text-church-900"
        >
          Paroki St. Yosafat
        </h2>

        <p class="mt-5 leading-8 text-stone-600">
          Paroki St. Yosafat merupakan komunitas umat Katolik yang
          berlokasi di Medokan Semampir, Surabaya.
        </p>

        <div
          class="mt-8 rounded-3xl border border-church-200 bg-white p-6 sm:p-8"
        >
          <p class="text-sm font-semibold text-church-900">
            Peresmian Paroki
          </p>

          <p class="mt-3 leading-7 text-stone-600">
            Paroki St. Yosafat diresmikan pada
            <strong class="font-semibold text-stone-900">
              {{ parishConfig.inauguration.displayDate }}
            </strong>
            oleh Bapa Uskup
            <strong class="font-semibold text-stone-900">
              {{ parishConfig.inauguration.officiant }}
            </strong>.
          </p>
        </div>

        <div class="mt-8">
          <p class="text-sm font-semibold text-church-900">
            Lokasi
          </p>

          <p class="mt-2 max-w-xl leading-7 text-stone-600">
            {{ parishConfig.address }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
