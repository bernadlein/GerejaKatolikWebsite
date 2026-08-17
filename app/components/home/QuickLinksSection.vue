<script setup lang="ts">
const links = [
  { title: 'Warta Paroki', description: 'Pengumuman dan warta mingguan.', to: '/warta' },
  { title: 'Pelayanan Sakramen', description: 'Panduan dan persyaratan pelayanan.', to: '/sakramen' },
  { title: 'Tentang Paroki', description: 'Sejarah, visi, dan kehidupan paroki.', to: '/tentang' },
  { title: 'Kontak Sekretariat', description: 'Hubungi dan temukan lokasi paroki.', to: '/kontak' },
]
</script>

<template>
  <section class="border-y border-church-200 bg-white">
    <div class="mx-auto grid max-w-7xl gap-px bg-church-200 sm:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="bg-white px-6 py-8 transition hover:bg-church-50"
      >
        <p class="font-display text-xl font-bold text-church-900">{{ link.title }}</p>
        <p class="mt-2 text-sm leading-6 text-stone-500">{{ link.description }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
