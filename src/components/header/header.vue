<script setup>
import { Icon } from '@iconify/vue';
import ButtonHeader from './button_header.vue'

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
        <ButtonHeader></ButtonHeader>
      </section>
    </div>
  </header>
</template>