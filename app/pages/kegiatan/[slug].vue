<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

const route =
  useRoute()

const slug =
  String(
    route.params.slug,
  )

const {
  event,
  status,
  error,
} = useEventDetail(
  slug,
)

watchEffect(() => {
  if (
    status.value === 'success'
    && !event.value
  ) {
    throw createError({
      statusCode: 404,

      statusMessage:
        'Kegiatan tidak ditemukan',
    })
  }
})

useSeoMeta({
  title: () =>
    event.value
      ? `${event.value.title} | ${parishConfig.name}`
      : `Kegiatan | ${parishConfig.name}`,

  description: () =>
    event.value?.summary
    ?? `Informasi kegiatan ${parishConfig.name}.`,
})
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- Loading -->
    <section
      v-if="status === 'pending'"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div
        class="h-[550px] animate-pulse rounded-[2.5rem] bg-stone-200"
      />
    </section>

    <template
      v-else-if="event"
    >
      <!-- HERO -->
      <section
        class="relative overflow-hidden bg-church-900"
      >
        <img
          v-if="event.coverImage"
          :src="event.coverImage"
          :alt="event.title"
          class="absolute inset-0 h-full w-full object-cover opacity-20"
        >

        <div
          class="absolute inset-0 bg-church-900/80"
        />

        <div
          class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <NuxtLink
            to="/kegiatan"
            class="text-sm font-semibold text-white/50 transition hover:text-white"
          >
            ← Kegiatan & Agenda
          </NuxtLink>

          <div
            class="mt-10 max-w-4xl"
          >
            <div
              class="flex flex-wrap gap-2"
            >
              <span
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gold-500"
              >
                {{ event.categoryLabel }}
              </span>

              <span
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70"
              >
                {{ event.statusLabel }}
              </span>
            </div>

            <h1
              class="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ event.title }}
            </h1>

            <p
              class="mt-5 max-w-2xl text-base leading-8 text-white/60"
            >
              {{ event.summary }}
            </p>
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section
        class="mx-auto grid max-w-7xl gap-7 px-5 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20"
      >
        <!-- MAIN -->
        <div>
          <article
            class="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-9"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Tentang Kegiatan
            </p>

            <h2
              class="mt-3 font-display text-2xl font-bold text-church-900"
            >
              Informasi Kegiatan
            </h2>

            <p
              v-if="event.description"
              class="mt-6 whitespace-pre-line leading-8 text-stone-600"
            >
              {{ event.description }}
            </p>

            <p
              v-else
              class="mt-6 leading-8 text-stone-500"
            >
              Informasi lengkap kegiatan
              akan diperbarui melalui
              pengumuman resmi paroki.
            </p>
          </article>
        </div>

        <!-- SIDEBAR -->
        <aside>
          <div
            class="sticky top-28 rounded-[2rem] bg-church-900 p-7 text-white"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Detail Agenda
            </p>

            <div
              class="mt-7 space-y-6"
            >
              <div>
                <p
                  class="text-xs uppercase tracking-[0.15em] text-white/40"
                >
                  Tanggal
                </p>

                <p
                  class="mt-2 font-semibold"
                >
                  {{ event.dateLabel }}
                </p>
              </div>

              <div>
                <p
                  class="text-xs uppercase tracking-[0.15em] text-white/40"
                >
                  Waktu
                </p>

                <p
                  class="mt-2 font-semibold"
                >
                  {{ event.timeLabel }}
                </p>
              </div>

              <div>
                <p
                  class="text-xs uppercase tracking-[0.15em] text-white/40"
                >
                  Lokasi
                </p>

                <p
                  class="mt-2 font-semibold"
                >
                  {{ event.location }}
                </p>

                <p
                  v-if="event.address"
                  class="mt-1 text-sm leading-6 text-white/50"
                >
                  {{ event.address }}
                </p>
              </div>
            </div>

            <a
              v-if="event.canRegister"
              :href="event.registration?.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-5 py-3.5 text-sm font-bold text-white"
            >
              {{
                event.registration?.label
                ?? 'Daftar Kegiatan'
              }}
            </a>

            <NuxtLink
              v-else
              to="/kontak"
              class="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              Hubungi Paroki
            </NuxtLink>
          </div>
        </aside>
      </section>
    </template>

    <section
      v-else-if="error"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <p class="text-red-700">
        Informasi kegiatan tidak dapat dimuat.
      </p>
    </section>
  </main>
</template>