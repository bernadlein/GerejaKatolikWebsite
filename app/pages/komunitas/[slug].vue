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
  community,
  status,
  error,
} = useCommunityDetail(
  slug,
)

watchEffect(() => {
  if (
    status.value === 'success'
    && !community.value
  ) {
    throw createError({
      statusCode: 404,

      statusMessage:
        'Komunitas tidak ditemukan',
    })
  }
})

useSeoMeta({
  title: () =>
    community.value
      ? `${community.value.name} | ${parishConfig.name}`
      : `Komunitas | ${parishConfig.name}`,

  description: () =>
    community.value?.summary
    ?? `Komunitas dan pelayanan ${parishConfig.name}.`,
})
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- LOADING -->
    <section
      v-if="status === 'pending'"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div
        class="h-[550px] animate-pulse rounded-[2rem] bg-stone-200"
      />
    </section>

    <template
      v-else-if="community"
    >
      <!-- HERO -->
      <section
        class="relative overflow-hidden bg-church-900"
      >
        <img
          v-if="community.coverImage"
          :src="community.coverImage"
          :alt="community.name"
          class="absolute inset-0 h-full w-full object-cover opacity-20"
        >

        <div
          class="absolute inset-0 bg-church-900/80"
        />

        <div
          class="absolute -right-28 -top-28 size-80 rounded-full border border-white/10"
        />

        <div
          class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <NuxtLink
            to="/komunitas"
            class="inline-flex text-sm font-semibold text-white/50 transition hover:text-white"
          >
            ← Komunitas & Pelayanan
          </NuxtLink>

          <div
            class="mt-10 max-w-4xl"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              {{ community.categoryLabel }}
            </p>

            <h1
              class="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ community.name }}
            </h1>

            <p
              class="mt-5 max-w-2xl text-base leading-8 text-white/60"
            >
              {{ community.summary }}
            </p>
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section
        class="mx-auto grid max-w-7xl gap-7 px-5 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20"
      >
        <!-- MAIN -->
        <div class="space-y-6">
          <!-- About -->
          <article
            class="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-9"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Tentang Komunitas
            </p>

            <h2
              class="mt-3 font-display text-2xl font-bold text-church-900"
            >
              Mengenal {{ community.displayName }}
            </h2>

            <p
              v-if="community.description"
              class="mt-6 whitespace-pre-line leading-8 text-stone-600"
            >
              {{ community.description }}
            </p>

            <p
              v-else
              class="mt-6 leading-8 text-stone-500"
            >
              Informasi lengkap komunitas
              akan ditampilkan setelah
              data resmi tersedia.
            </p>
          </article>

          <!-- Activities -->
          <article
            class="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-9"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Kegiatan
            </p>

            <h2
              class="mt-3 font-display text-2xl font-bold text-church-900"
            >
              Aktivitas Komunitas
            </h2>

            <div
              v-if="community.hasActivities"
              class="mt-7 space-y-4"
            >
              <div
                v-for="activity in community.activities"
                :key="activity.id"
                class="flex gap-4 rounded-2xl bg-[#faf9f7] p-5"
              >
                <div
                  class="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-church-900 text-xs font-bold text-white"
                >
                  +
                </div>

                <div>
                  <h3
                    class="font-semibold text-church-900"
                  >
                    {{ activity.title }}
                  </h3>

                  <p
                    v-if="activity.description"
                    class="mt-2 text-sm leading-6 text-stone-500"
                  >
                    {{ activity.description }}
                  </p>
                </div>
              </div>
            </div>

            <p
              v-else
              class="mt-5 text-sm leading-7 text-stone-500"
            >
              Informasi kegiatan komunitas
              belum dipublikasikan.
            </p>
          </article>
        </div>

        <!-- SIDEBAR -->
        <aside>
          <div
            class="sticky top-28 space-y-5"
          >
            <!-- Meeting -->
            <article
              class="rounded-[2rem] bg-church-900 p-7 text-white"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Informasi Komunitas
              </p>

              <div
                v-if="community.hasMeeting"
                class="mt-7 space-y-6"
              >
                <div
                  v-if="community.meeting?.schedule"
                >
                  <p
                    class="text-xs uppercase tracking-[0.14em] text-white/40"
                  >
                    Jadwal
                  </p>

                  <p
                    class="mt-2 font-semibold"
                  >
                    {{ community.meeting.schedule }}
                  </p>
                </div>

                <div
                  v-if="community.meeting?.location"
                >
                  <p
                    class="text-xs uppercase tracking-[0.14em] text-white/40"
                  >
                    Lokasi
                  </p>

                  <p
                    class="mt-2 font-semibold"
                  >
                    {{ community.meeting.location }}
                  </p>
                </div>
              </div>

              <p
                v-else
                class="mt-5 text-sm leading-7 text-white/50"
              >
                Jadwal pertemuan akan
                diperbarui setelah
                informasi tersedia.
              </p>
            </article>

            <!-- Coordinator -->
            <article
              class="rounded-[2rem] border border-stone-200 bg-white p-7"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Koordinator
              </p>

              <template
                v-if="community.hasCoordinator"
              >
                <h3
                  v-if="community.coordinator?.name"
                  class="mt-4 font-display text-xl font-bold text-church-900"
                >
                  {{ community.coordinator.name }}
                </h3>

                <p
                  v-if="community.coordinator?.role"
                  class="mt-1 text-sm text-stone-500"
                >
                  {{ community.coordinator.role }}
                </p>

                <div
                  class="mt-5 space-y-2"
                >
                  <a
                    v-if="community.coordinator?.phone"
                    :href="`tel:${community.coordinator.phone}`"
                    class="block text-sm font-semibold text-church-800"
                  >
                    {{ community.coordinator.phone }}
                  </a>

                  <a
                    v-if="community.coordinator?.email"
                    :href="`mailto:${community.coordinator.email}`"
                    class="block break-all text-sm font-semibold text-church-800"
                  >
                    {{ community.coordinator.email }}
                  </a>
                </div>
              </template>

              <p
                v-else
                class="mt-4 text-sm leading-7 text-stone-500"
              >
                Informasi koordinator
                belum tersedia.
              </p>
            </article>

            <!-- Join -->
            <article
              class="rounded-[2rem] bg-[#f3eee5] p-7"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Bergabung
              </p>

              <h3
                class="mt-3 font-display text-xl font-bold text-church-900"
              >
                Ingin Bergabung?
              </h3>

              <p
                v-if="community.joinInfo"
                class="mt-3 text-sm leading-7 text-stone-600"
              >
                {{ community.joinInfo }}
              </p>

              <p
                v-else
                class="mt-3 text-sm leading-7 text-stone-600"
              >
                Hubungi sekretariat paroki
                untuk informasi lebih lanjut
                mengenai komunitas ini.
              </p>

              <NuxtLink
                to="/kontak"
                class="mt-6 inline-flex items-center text-sm font-bold text-church-800"
              >
                Hubungi Paroki

                <span class="ml-2">
                  →
                </span>
              </NuxtLink>
            </article>
          </div>
        </aside>
      </section>
    </template>

    <section
      v-else-if="error"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <p class="text-red-700">
        Informasi komunitas tidak dapat dimuat.
      </p>
    </section>
  </main>
</template>