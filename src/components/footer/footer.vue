<script>
export default {
  data: function () {
    return {
      empresa: import.meta.env.VITE_API_EMPRESA || "Nombre empresa",
      web: import.meta.env.VITE_API_WEB || "https://www.google.com/",
    };
  },
}
</script>

<template>
  <footer class="text-gray-600 body-font">
    <hr class=" bg-gray-100" />
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <div class="flex text-sm text-gray-300">
        <a :href="web">
          <p class="border-r-2 pr-4">{{ empresa }}</p>
        </a>
        <p class="pl-4">Division TI</p>
      </div>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-xs text-gray-300">
        <p class="border-r-2 pr-4">Version 3.0.0</p>
        <p class="pl-4">2023</p>
      </span>
    </div>
  </footer>
</template>