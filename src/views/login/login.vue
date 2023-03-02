<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="flex w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
    <div class="hidden bg-cover lg:block lg:w-1/2"
      style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');">
    </div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <div class="flex items-end justify-center mx-auto ">
        <img class="w-auto h-7" src="/img/logo.png" alt="">
        <p class="pl-4 mt-3 text-xl font-bold text-center font-Montserrat">Inicio de sesion</p>
      </div>

      <a href="#"
        class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-zinc-700 dark:text-gray-300 hover:bg-zinc-50 dark:hover:bg-zinc-700">
        <div class="px-4 py-2">
          <Icon icon="fe:login" class="w-5 h-5" />
        </div>

        <span class="w-5/6 px-4 py-3 font-bold text-center">Ingresar con ID Servel</span>
      </a>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
          o con usuario contraseña</a>

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>

      <div class="mt-4">
        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email
          Address</label>
        <input id="LoggingEmailAddress"
          class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email" />
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="loggingPassword">Password</label>
          <a href="#" class="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
        </div>

        <input id="loggingPassword"
          class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password" />
      </div>

      <div class="mt-6">
        <button
          class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          Sign In
        </button>
      </div>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

        <a href="#" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
    </div>
  </div>
</template>
