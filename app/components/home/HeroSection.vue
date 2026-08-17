<script setup lang="ts">
import { parishConfig } from '~/config/parish'
</script>

<template>
  <section class="relative overflow-hidden border-b border-church-200">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,147,74,0.18),transparent_35%)]" />
    <div class="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <div class="max-w-3xl">
        <p class="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-gold-500">Selamat Datang</p>
        <h1 class="font-display text-5xl font-bold leading-[1.05] text-church-900 sm:text-6xl lg:text-7xl">
          {{ parishConfig.name }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{{ parishConfig.tagline }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton to="/jadwal">Lihat Jadwal Misa</AppButton>
          <AppButton to="/sakramen" variant="secondary">Pelayanan Sakramen</AppButton>
        </div>
      </div>

      <div class="rounded-[2rem] border border-church-200 bg-white/80 p-7 shadow-sm backdrop-blur">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Informasi Cepat</p>
        <div class="mt-6 space-y-5">
          <NuxtLink to="/warta" class="block border-b border-church-100 pb-5">
            <p class="text-sm font-semibold text-church-900">Warta Paroki Minggu Ini</p>
            <p class="mt-1 text-sm text-stone-500">Baca pengumuman dan informasi pastoral terbaru.</p>
          </NuxtLink>
          <NuxtLink to="/sakramen" class="block border-b border-church-100 pb-5">
            <p class="text-sm font-semibold text-church-900">Persyaratan Sakramen</p>
            <p class="mt-1 text-sm text-stone-500">Baptis, Komuni Pertama, Krisma, dan Perkawinan.</p>
          </NuxtLink>
          <NuxtLink to="/kontak" class="block">
            <p class="text-sm font-semibold text-church-900">Hubungi Sekretariat</p>
            <p class="mt-1 text-sm text-stone-500">Jam layanan, alamat, dan kontak paroki.</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
