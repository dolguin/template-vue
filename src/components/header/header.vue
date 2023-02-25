<script>
export default {
  data: function () {
    return {
      servicio: import.meta.env.VITE_API_EMPRESA || "Nombre empresa",
    };
  },
}
</script>

<template>
  <header class="p-4 dark:bg-gray-800 dark:text-gray-100">
    <div class="container flex justify-between h-16 mx-auto">
      <section class="container inline-flex">
        <a rel="noopener noreferrer" href="http://www.servel.cl" aria-label="Back to homepage"
          class="flex items-center p-2">
          <img src=" /img/logo.png" alt="" class=" p-2" width="68">
        </a>
        <p class="flex self-center font-bold text-lg">{{ servicio }}</p>
      </section>
      <section class="flex">
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a rel="noopener noreferrer" href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Link</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
          </li>
          <li class="flex">
            <a rel="noopener noreferrer" href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</a>
          </li>
        </ul>
        <div class="items-center flex-shrink-0 hidden lg:flex">
          <button class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
        </div>
      </section>

    </div>
  </header>
</template>