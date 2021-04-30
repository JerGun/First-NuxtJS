<template>
  <div class="h-screen flex">
    <!-- Main -->
    <div
      class="static h-full w-full flex flex-wrap justify-center items-center"
    >
      <img
        src="~/assets/images/background.svg"
        class="absolute w-full h-full object-cover object-top md:pb-48"
        alt="Background"
      />
      <!-- Left -->
      <div
        class="w-7/12 md:w-full h-full md:h-5/6 md:pt-10 pb-44 pl-44 md:pb-0 md:pl-0 flex flex-wrap justify-center items-center md:items-start bg-custom-blue-default"
      >
        <!-- Left Container -->
        <div
          class="h-1/2 w-6/12 md:w-10/12 flex flex-wrap content-center md:items-center text-left md:text-center text-white"
        >
          <!-- Top market company & Icon -->
          <div class="w-full flex justify-start md:justify-center">
            <img
              class="w-5 mr-3 mb-1"
              src="~/assets/icons/star.svg"
              alt="star"
            />
            <p class="text-lg" style="font-weight: 700">Top market company</p>
          </div>
          <!-- Focus On The Work That Matters -->
          <p
            class="text-6xl mt-5 mb-10 leading-snug text-light-red-default"
            style="font-weight: 700"
          >
            Focus On The Work That Matters
          </p>
          <!-- Details -->
          <div class="w-full text-2xl text-left md:text-center space-y-2">
            <p>udix is the world's first smart workspace.</p>
            <p>We bring all your team's content together</p>
            <p>while letting you use the tools you love.</p>
          </div>
          <!-- Read more -->
          <div
            class="flex w-full mt-24 md:mt-12 justify-start md:justify-center"
          >
            <p class="text-lg mr-3 text-light-red-default">Read more</p>
            <img src="~/assets/icons/more.svg" alt="Read more" />
          </div>
        </div>
      </div>
      <span class="h-screen w-5/12 visible md:invisible"></span>

      <!-- Right -->
      <div
        class="absolute top-56 flex justify-end mt-16 md:justify-center md:top-96 md:mt-72"
      >
        <!-- Card Container -->
        <div
          class="relative h-auto w-5/12 md:w-7/12 p-8 flex justify-between items-center bg-white shadow-lg"
        >
          <!-- Card items -->
          <div class="h-full w-10/12 pl-6 py-6 space-y-12">
            <p class="text-2xl" style="font-weight: 700">Get started now</p>
            <div class="space-y-8">
              <input
                type="text"
                placeholder="Name"
                class="h-14 w-10/12 pl-4 border-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="Email"
                class="h-14 w-10/12 pl-4 border-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                class="h-14 w-10/12 pl-4 border-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="Company Name"
                class="h-14 w-10/12 pl-4 border-2 border-gray-300"
              />
              <button
                class="h-14 w-4/12 bg-custom-blue-default text-white"
                style="font-weight: 700"
              >
                Sign up
              </button>
            </div>
            <!-- Right items -->
            <div class="flex space-x-2">
              <p class="text-gray-400">Support:</p>
              <p class="text-custom-blue-default">help@udix.com</p>
            </div>
          </div>
          <div class="h-auto">
            <img src="~/assets/icons/line.svg" class="" alt="line" />
          </div>
          <img
            src="~/assets/icons/computer.svg"
            class="absolute w-40 bottom-20 right-7"
            alt="Get Started"
          />
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