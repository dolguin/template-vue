<script setup>
import { Icon } from '@iconify/vue';
import { useDarkMode } from "@/composables/darkMode.js"

const { changeDarkMode, toggleDarkMode } = useDarkMode();
const empresa = import.meta.env.VITE_API_EMPRESA || "Nombre empresa";
const nombre_eleccion = import.meta.env.VITE_API_NAME || "Informe tarifario";
</script>

<template>
  <header class="p-4 text-gray-100 bg-zinc-800">
    <div class="container flex flex-col">
      <section class="container inline-flex ">
        <a class="flex mb-4 font-medium title-font md:mb-0" href="http://www.servel.cl">
          <img src=" /img/logo.png" alt="" />
        </a>
        <div class="flex justify-center w-full pl-4">
          <p class="self-center text-xl font-bold uppercase text-slate-200 font-Montserrat">{{ nombre_eleccion }}</p>
        </div>
      </section>
      <section class="flex flex-wrap items-center justify-center ml-auto">
        <router-link to="/login">
          <button type="button"
            class="inline-flex items-center px-10 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700">
            <Icon icon="fe:key" />
          </button>
        </router-link>

        <button type="button"
          class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-zinc-600 bg-zinc-700"
          @click="changeDarkMode">
          <Icon v-if="toggleDarkMode" icon="fe:sunny-o" />
          <Icon v-else icon="fe:moon" />
        </button>
      </section>
    </div>
  </header>
</template>