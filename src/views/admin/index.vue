<script setup>
import headerMenu from '@/components/header/header_menu.vue'
import footer1 from '@/components/footer/footer.vue'

</script>


<template>
  <div class="flex flex-col w-full h-screen bg-gray-50 dark:bg-zinc-800">
    <headerMenu />
    <main class="flex-grow">
      <h1 class="uppercase justify-center font-Montserrat">esta es la pagina template del admin</h1>
      <router-view></router-view>
    </main>
    <footer1 />
  </div>
</template>