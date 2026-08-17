<script setup lang="ts">
const { data: masses, status } = await useMassSchedule()

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

const timeFormatter = new Intl.DateTimeFormat('id-ID', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Liturgi</p>
        <h2 class="mt-2 font-display text-3xl font-bold text-church-900 sm:text-4xl">Misa Berikutnya</h2>
      </div>
      <NuxtLink to="/jadwal" class="text-sm font-semibold text-church-700 hover:text-church-900">Lihat semua jadwal →</NuxtLink>
    </div>

    <div v-if="status === 'pending'" class="mt-8 text-sm text-stone-500">Memuat jadwal…</div>

    <div v-else class="mt-8 grid gap-4 md:grid-cols-3">
      <article
        v-for="mass in masses"
        :key="`${mass.id}-${mass.startsAt}`"
        class="rounded-3xl border border-church-200 bg-white p-6 shadow-sm"
      >
        <p class="text-sm font-medium text-stone-500">{{ dateFormatter.format(new Date(mass.startsAt)) }}</p>
        <p class="mt-4 font-display text-4xl font-bold text-church-900">{{ timeFormatter.format(new Date(mass.startsAt)) }}</p>
        <p class="mt-4 font-semibold text-stone-900">{{ mass.label }}</p>
        <p class="mt-1 text-sm text-stone-500">{{ mass.location }}</p>
      </article>
    </div>
  </section>
</template>
