<script setup>
import { Icon } from '@iconify/vue';

const empresa = import.meta.env.VITE_API_EMPRESA || "Nombre empresa"
const web = import.meta.env.VITE_API_WEB || "https://www.google.com/"
const version = import.meta.env.VITE_API_VERSION || "0.0.0"

</script>

<template>
  <footer class="text-gray-600 body-font dark:bg-gray-800 font-Montserrat">
    <hr class="bg-gray-100 dark:opacity-5" />
    <div class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
      <div class="flex text-sm text-gray-300">
        <a :href="web">
          <p class="pr-4 border-r-2">{{ empresa }}</p>
        </a>
        <section class="flex items-center pl-3">
          <a class="mr-2 hover:text-blue-200" title="Facebook" href="https://www.facebook.com/ServelChile"><Icon icon="fe:facebook" width="24" class=""/></a>
          <a class="mr-2 hover:text-red-200" title="Instagram" href="https://www.instagram.com/servel.chile/"><Icon icon="fe:instagram" width="24" class=""/></a>
          <a class="mr-2 hover:text-blue-200" title="Twitter" href="https://twitter.com/ServelChile"><Icon icon="fe:twitter" width="24" class=""/></a>
          <a class="mr-2 hover:text-red-200" title="Youtube" href="https://www.youtube.com/servicioelectoralcl"><Icon icon="fe:youtube" width="24" class=""/></a>
        </section>
      </div>
      <span class="inline-flex items-center justify-center mt-4 text-xs text-gray-300 sm:ml-auto sm:mt-0 sm:justify-start">
        <p class="pr-4 border-r-2">Version {{ version }}</p>
        <!-- <p class="pl-4">2023</p> -->
        <p class="pl-4">Division TI</p>
      </span>
    </div>
  </footer>
</template>