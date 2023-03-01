<script setup>
  import headerNav from '@/components/header/header.vue'
  import headerMenu from '@/components/header/header_menu.vue'
  import footer1 from '@/components/footer/footer.vue'

  const menu = false // Respuesta a si existe acto electoral activo
</script>


<template>
  <div class="flex flex-col w-full h-screen bg-gray-50 dark:bg-zinc-800">
    <headerMenu v-if="menu"/>
    <headerNav v-else/>
    <main class="flex-grow">

    </main>
    <footer1 />
  </div>
</template>
