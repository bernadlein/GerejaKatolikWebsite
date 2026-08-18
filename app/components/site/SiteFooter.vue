<script setup lang="ts">
import { parishConfig } from '~/config/parish'
</script>

<template>
  <footer class="border-t border-church-200 bg-white">
    <div
      class="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
    >
      <!-- Identitas -->
      <div>
        <div class="flex items-center gap-3">
          <img
            :src="parishConfig.branding.logo"
            :alt="`Logo ${parishConfig.name}`"
            class="size-14 object-contain"
          >

          <div>
            <p class="font-display text-xl font-bold text-church-900">
              {{ parishConfig.name }}
            </p>

            <p class="mt-1 text-xs text-stone-500">
              {{ parishConfig.city }}
            </p>
          </div>
        </div>

        <p class="mt-4 max-w-sm text-sm leading-6 text-stone-600">
          {{ parishConfig.tagline }}
        </p>
      </div>

      <!-- Alamat -->
      <div>
        <p class="text-sm font-semibold text-stone-900">
          Alamat
        </p>

        <p class="mt-3 text-sm leading-6 text-stone-600">
          {{ parishConfig.address }}
        </p>
      </div>

      <!-- Kontak -->
      <div>
        <p class="text-sm font-semibold text-stone-900">
          Kontak
        </p>

        <a
          :href="`mailto:${parishConfig.contact.email}`"
          class="mt-3 block text-sm text-stone-600 transition hover:text-church-700"
        >
          {{ parishConfig.contact.email }}
        </a>

        <a
          v-for="phone in parishConfig.contact.phones"
          :key="phone"
          :href="`tel:${phone}`"
          class="mt-2 block text-sm text-stone-600 transition hover:text-church-700"
        >
          {{ phone }}
        </a>
      </div>

      <!-- Social -->
      <div>
        <p class="text-sm font-semibold text-stone-900">
          Ikuti Kami
        </p>

        <a
          :href="parishConfig.social.instagram.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 block text-sm text-stone-600 transition hover:text-church-700"
        >
          Instagram @{{ parishConfig.social.instagram.username }}
        </a>

        <p class="mt-2 text-sm text-stone-600">
          YouTube
          <br>
          {{ parishConfig.social.youtube.name }}
        </p>
      </div>
    </div>

    <div class="border-t border-church-100">
      <div
        class="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-stone-500 lg:px-8"
      >
        © {{ new Date().getFullYear() }}
        {{ parishConfig.churchName }}
      </div>
    </div>
  </footer>
</template>
