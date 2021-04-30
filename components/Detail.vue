<template>
  <div class="relative h-screen flex justify-center md:flex-col-reverse md:items-center">
    <!-- Left Content -->
    <div class="w-6/12 md:w-11/12 flex justify-center items-center">
      <img
        src="~/assets/images/image1.svg"
        class="w-8/12 mt-24 ml-48 scale-50 md:mt-0 md:ml-0 md:w-full"
        alt="image"
      />
    </div>
    <!-- Right Content -->
    <div class="w-6/12 flex justify-center items-center md:w-full md:pt-64">
      <div class="w-9/12 text-right md:text-center md:w-full md:items-center md:mr-0 flex flex-col items-end space-y-16 md:space-y-8 mr-80 mb-48">
        <img src="~/assets/icons/logo_blue.svg" class="w-48 md:w-40" alt="Logo" />
        <div class="text-5xl" style="font-weight: 700">
          <p>is a leading provider of digital</p>
          <p>marketing services</p>
        </div>
        <div class="text-xl">
          <p>
            Using proprietary tools and we run thousands of simultaneous
            self-funded
          </p>
          <p>
            campaigns across different platforms such as paid search, social
            advertising,
          </p>
          <p>
            mobile and video ads and many more. The campaigns either support our
          </p>
          <p>
            publishing assets or (in most cases) direct users directly to our
            clients.
          </p>
        </div>
      </div>
    </div>
    <div class="absolute flex bottom-20 w-8/12 items-center md:hidden">
      <div class="relative w-full">
        <span
          class="absolute divider visible md:invisible w-full h-0.5 top-7"
        ></span>
        <div class="w-full flex justify-center">
          <p class="text-5xl text-light-red-default">•</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>