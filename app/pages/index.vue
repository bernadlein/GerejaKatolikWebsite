<script setup lang="ts">
import { parishConfig } from '~/config/parish'

useSeoMeta({
  title: parishConfig.name,

  description:
    'Website resmi Paroki St. Yosafat Surabaya. Informasi jadwal misa, pelayanan sakramen, warta paroki, kegiatan, dan kehidupan umat.',
})
</script>

<template>
  <div>
    <HeroSection />

    <QuickLinksSection />

    <UpcomingMassesSection />

    <ParishUpdatesSection />

    <UpcomingEventsSection />
  </div>
</template>
