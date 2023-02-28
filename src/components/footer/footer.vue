<script>
export default {
  data: function () {
    return {
      empresa: import.meta.env.VITE_API_EMPRESA || "Nombre empresa",
      web: import.meta.env.VITE_API_WEB || "https://www.google.com/",
      version: import.meta.env.VITE_API_VERSION || "0.0.0",
    };
  },
}
</script>

<template>
  <footer class="text-gray-600 body-font dark:bg-gray-800">
    <hr class="bg-gray-100 dark:opacity-5" />
    <div class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
      <div class="flex text-sm text-gray-300">
        <a :href="web">
          <p class="pr-4 border-r-2">{{ empresa }}</p>
        </a>
        <p class="pl-4">Division TI</p>
      </div>
      <span class="inline-flex justify-center mt-4 text-xs text-gray-300 sm:ml-auto sm:mt-0 sm:justify-start">
        <p class="pr-4 border-r-2">Version {{ version }}</p>
        <p class="pl-4">2023</p>
      </span>
    </div>
  </footer>
</template>