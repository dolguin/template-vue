<script setup>
import { Icon } from '@iconify/vue';
import { useDarkMode } from "@/composables/darkMode.js"

const { changeDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <div>
    <button type="button" title="Inicio"
      class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700">
      <router-link to="/">
        <Icon icon="fe:home" />
      </router-link>
    </button>
    <button type="button" title="faq"
      class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700">
      <router-link to="/faq">
        <Icon icon="fe:question" />
      </router-link>
    </button>
    <button type="button"
      class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700"
      @click="changeDarkMode">
      <Icon v-if="toggleDarkMode" icon="fe:sunny-o" />
      <Icon v-else icon="fe:moon" />
    </button>

    <router-link to="/login">
      <button type="button"
        class="inline-flex items-center px-10 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700">
        <Icon icon="fe:key" />
      </button>
    </router-link>
  </div>
</template>