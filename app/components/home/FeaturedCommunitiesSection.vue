<script setup lang="ts">
const {
  communities,
  status,
} = useFeaturedCommunities(3)
</script>

<template>
  <!--
    Section tidak ditampilkan sama sekali
    jika belum ada komunitas resmi.
    Homepage tetap bersih.
  -->
  <section
    v-if="
      status === 'pending'
      || communities.length
    "
    class="bg-white"
  >
    <div
      class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
    >
      <div
        class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <div
            class="flex items-center gap-3"
          >
            <span
              class="h-px w-8 bg-gold-500"
            />

            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Bertumbuh Bersama
            </p>
          </div>

          <h2
            class="mt-4 font-display text-3xl font-bold text-church-900 sm:text-4xl"
          >
            Komunitas Paroki
          </h2>

          <p
            class="mt-4 max-w-xl text-sm leading-7 text-stone-500"
          >
            Temukan ruang untuk bertumbuh,
            membangun persaudaraan,
            dan melayani bersama.
          </p>
        </div>

        <NuxtLink
          to="/komunitas"
          class="group text-sm font-semibold text-church-800"
        >
          Lihat semua komunitas

          <span
            class="ml-2 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in 3"
          :key="item"
          class="h-[380px] animate-pulse rounded-[2rem] bg-stone-200"
        />
      </div>

      <!-- Data -->
      <div
        v-else
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <CommunityCard
          v-for="community in communities"
          :key="community.id"
          :community="community"
        />
      </div>
    </div>
  </section>
</template>
