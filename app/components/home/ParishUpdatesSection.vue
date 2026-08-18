<script setup lang="ts">
const {
  announcements,
} = useAnnouncements(3)

const {
  bulletins,
} = useBulletins(2)
</script>

<template>
  <section
    class="bg-white"
  >
    <div
      class="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <!-- Heading -->
      <div
        class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
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
              Informasi Terkini
            </p>
          </div>

          <h2
            class="mt-4 font-display text-3xl font-bold text-church-900 sm:text-4xl"
          >
            Kabar dari Paroki
          </h2>
        </div>

        <NuxtLink
          to="/warta"
          class="text-sm font-semibold text-church-800"
        >
          Lihat semua informasi →
        </NuxtLink>
      </div>

      <div
        class="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <!-- ANNOUNCEMENTS -->
        <div
          class="rounded-[2rem] bg-church-50 p-6 sm:p-8"
        >
          <div
            class="flex items-center justify-between"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Pengumuman
              </p>

              <h3
                class="mt-2 font-display text-2xl font-bold text-church-900"
              >
                Pengumuman Penting
              </h3>
            </div>

            <div
              class="flex size-11 items-center justify-center rounded-2xl bg-white text-church-800"
            >
              <svg
                viewBox="0 0 24 24"
                class="size-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <path
                  d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                />

                <path
                  d="M10 21h4"
                />
              </svg>
            </div>
          </div>

          <div
            class="mt-7 space-y-3"
          >
            <article
              v-for="announcement in announcements"
              :key="announcement.id"
              class="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-gold-500/30 hover:shadow-lg hover:shadow-stone-900/5"
            >
              <div
                v-if="announcement.priority === 'important'"
                class="mb-3 inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-red-700"
              >
                Penting
              </div>

              <h4
                class="font-display text-lg font-bold text-church-900"
              >
                {{ announcement.title }}
              </h4>

              <p
                class="mt-2 text-sm leading-6 text-stone-500"
              >
                {{ announcement.summary }}
              </p>

              <NuxtLink
                v-if="announcement.action"
                :to="announcement.action.to"
                class="mt-4 inline-flex text-sm font-semibold text-church-800"
              >
                {{ announcement.action.label }}

                <span class="ml-2">
                  →
                </span>
              </NuxtLink>
            </article>
          </div>
        </div>

        <!-- WARTA -->
        <div
          class="rounded-[2rem] bg-church-900 p-6 text-white sm:p-8"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
          >
            Warta Mingguan
          </p>

          <h3
            class="mt-2 font-display text-2xl font-bold"
          >
            Warta Paroki Terbaru
          </h3>

          <div
            class="mt-7 space-y-3"
          >
            <article
              v-for="bulletin in bulletins"
              :key="bulletin.id"
              class="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p
                class="text-xs font-medium text-gold-500"
              >
                {{ bulletin.liturgicalLabel }}
              </p>

              <h4
                class="mt-2 font-display text-lg font-bold"
              >
                {{ bulletin.title }}
              </h4>

              <p
                v-if="bulletin.description"
                class="mt-2 text-sm leading-6 text-white/50"
              >
                {{ bulletin.description }}
              </p>

              <a
                v-if="bulletin.pdfUrl"
                :href="bulletin.pdfUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 inline-flex text-sm font-semibold text-white"
              >
                Baca Warta →

              </a>
            </article>
          </div>

          <NuxtLink
            to="/warta"
            class="mt-6 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Arsip Warta
            <span class="ml-2">
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
