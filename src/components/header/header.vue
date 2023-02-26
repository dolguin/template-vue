<script>
export default {
  data: function () {
    return {
      empresa: import.meta.env.VITE_API_EMPRESA || "Nombre empresa",
    };
  },
}
</script>

<template>
  <header class="p-4 bg-[#2b303b]">
    <div class="container flex flex-col">
      <section class="container inline-flex ">
        <div class=" w-16">
          <a rel="noopener noreferrer" href="http://www.servel.cl" aria-label="Back to homepage">
            <img src=" /img/logo.png" alt="" />
          </a>
        </div>

        <div class="flex justify-center pl-4 w-full">
          <p class="self-center font-bold text-2xl text-slate-200">{{ empresa }}</p>
        </div>
      </section>
      <section class="items-center space-x-3 flex">
        <div class="w-1/2"></div>
        <!-- <div class=""> -->
        <ul class="justify-center flex">
          <li>link 1</li>
        </ul>
      </section>

    </div>
  </header>
</template>