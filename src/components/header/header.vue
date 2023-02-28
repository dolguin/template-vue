<script setup>
  import { Icon } from '@iconify/vue';
  import { useDarkMode } from "@/composables/darkMode.js"

  const { changeDarkMode, toggleDarkMode } = useDarkMode();
  const empresa = import.meta.env.VITE_API_EMPRESA || "Nombre empresa";
</script>

<template>
  <header class="p-4 text-gray-100 bg-gray-800">
    <div class="container flex flex-col">
      <section class="container inline-flex ">
          <a class="flex mb-4 font-medium title-font md:mb-0" href="http://www.servel.cl">
            <img src=" /img/logo.png" alt="" />
          </a>
        <div class="flex justify-center w-full pl-4">
          <p class="self-center text-2xl font-bold text-slate-200">{{ empresa }}</p>
        </div>
      </section>
      <section class="flex items-center pr-5">
        <nav class="flex flex-wrap items-center justify-center pr-20 ml-auto">
          <a href="#" class="mr-10"><Icon icon="fe:home" class="w-4 h-4 ml-1" /></a>
          <a href="#" class="flex items-center mr-5"><Icon icon="fe:plus" class="m-1" />Ingresar</a>
          <a href="#" class="flex items-center mr-5"><Icon icon="fe:edit" class="m-1" />Adecuaciones</a>
          <a href="#" class="flex items-center mr-5"><Icon icon="fe:search" class="m-1" />Estado Informe</a>
          <a href="#" class="flex items-center mr-5"><Icon icon="fe:book" class="m-1" />Buscador de medios</a>
          
        </nav>
        <div>
          <button type="button" class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-slate-600 bg-slate-700">
            <Icon icon="fe:key" />
          </button>
          <button type="button" class="inline-flex items-center px-3 py-2 m-0.5 mt-0 border-0 rounded focus:outline-none hover:bg-slate-600 bg-slate-700"
          @click="changeDarkMode" >
            <Icon v-if="toggleDarkMode" icon="fe:sunny-o" />            
            <Icon v-else icon="fe:moon" />
          </button>
        </div>
        
      </section>
    </div>
  </header>
</template>