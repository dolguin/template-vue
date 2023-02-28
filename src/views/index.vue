<script setup>
  import headerNav from '@/components/header/header.vue'
  import footer1 from '@/components/footer/footer.vue'	
</script>


<template>
  <div class="flex flex-col w-full h-screen bg-gray-50 dark:bg-gray-800">
    <headerNav />
    <main class="flex-grow"></main>
    <footer1 />
  </div>
</template>
