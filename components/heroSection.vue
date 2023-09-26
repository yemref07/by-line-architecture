<template>
  <div>
    <div
      class="flex flex-col justify-center md:justify-end items-start bg-hero relative h-60 md:h-96"
    >
      <div class="black-overlay"></div>
      <div
        class="container mx-auto px-10 lg:px-20 xl:px-32 md:pb-20 z-10"
      >
        <div class="">
          <h1 class="text-2xl lg:text-4xl xl:text-5xl text-white font-bold">
            {{ title }}
          </h1>
        </div>
        <div class="md:w-1/2">
          <p class="mt-2 text-white text-md lg:text-lg">
            {{desc}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    title:String,
    desc:String
})
</script>

<style>
.bg-hero {
  background: url(../assets/images/heros/contact.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
