<template>
  <nav class="relative h-24 flex justify-center">
    <img
      src="~/assets/images/background.svg"
      class="absolute w-full h-full object-cover object-top"
      alt="Background"
    />
    <span
      class="h-full w-7/12 md:w-full sm:w-full bg-custom-blue-default"
    ></span>
    <span class="h-full w-5/12 md:w-0 sm:w-0 bg-white"></span>
    <!-- Main -->
    <div class="absolute h-full w-7/12 md:w-full flex items-center text-white">
      <!-- Logo -->
      <img
        src="~/assets/icons/logo.svg"
        class="md:ml-8 mr-10 md:mr-6"
        alt="Logo"
      />
      <button
        class="h-12 w-32 text-center mr-6 md:mr-4 border border-white text-white hidden sm:block"
      >
        MENU
      </button>
      <!-- Menu -->
      <div class="h-full w-full flex justify-between items-center sm:hidden">
        <!-- Menu Items -->
        <div class="space-x-10 md:space-x-6 flex flex-wrap items-center">
          <p class="mx-3 opacity-30">•</p>
          <a class="text-light-red-default" href="">HOME</a>
          <a href="">BLOG</a>
          <a href="">PRODUCT</a>
          <a href="">CONTACTS</a>
        </div>
        <!-- Sign in & Sign up -->
        <div class="flex md:mr-10 md:ml-3 visible md:visible sm:invisible">
          <button
            class="h-12 w-32 text-center mr-6 md:mr-4 text-custom-blue-default md:text-white"
          >
            SIGN IN
          </button>
          <button
            class="h-12 w-32 text-center text-custom-blue-default md:text-white border-custom-blue-default md:border-white border"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>