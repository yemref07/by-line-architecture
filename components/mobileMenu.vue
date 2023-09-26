<template>
  <div
    class="flex justify-between items-center dark:bg-zinc-900 py-4 px-5"
  >
    <div class="">
      <nuxt-link to="/">
        <img
          src="../assets/images/logos/logo-white.svg"
          alt="By Line Mimarlık"
          width="80"
        />
      </nuxt-link>
    </div>
    <div class="">
      <img
        src="../assets/images/icons/menu-icon1.svg"
        alt="By Line Mimarlık"
        width="30"
        @click="toggleMobileMenu"
      />
    </div>
  </div>

  <div
    class="flex flex-col items-center dark:bg-zinc-900 text-white px-10 py-10 gap-3 fixed top-0 right-0 left-0 bottom-0 z-40 overflow-y-auto transition-all	delay-100"
    :class="{ 'transition-transform -translate-x-full': !isVisible }"
  >
    <div class="mb-5">
      <img src="../assets/images/logos/logo-white.svg" alt="By Line Mimarlık Logo" width="150" />
    </div>

    <div class="">
      <nuxt-link to="/" title="By Line Mimarlık Anasayfa" class="text-xl"
        >Anasayfa</nuxt-link
      >
    </div>
    <div class="">
      <nuxt-link
        to="/hakkimizda"
        title="By Line Mimarlık Hakkımızda"
        class="text-xl"
        >Hakkımızda</nuxt-link
      >
    </div>
    <div class="">
      <nuxt-link
        to="/hizmetlerimiz"
        title="By Line Mimarlık Hizmetlerimiz"
        class="text-xl"
        >Hizmetlerimiz</nuxt-link
      >
    </div>
    <div class="">
      <nuxt-link
        to="/iletisim"
        title="By Line Mimarlık İletişim"
        class="text-xl"
        >İletişim</nuxt-link
      >
    </div>

    <div class="flex gap-2 items-center mt-5 justify-center">
      <img
        src="../assets/images/social-icons/twitter-original.svg"
        alt="By Line Mimarlık Twitter"
        width="24"
      />
      <img
        src="../assets/images/social-icons/facebook-fill.svg"
        alt="By Line Mimarlık Facebook"
        width="24"
      />
      <img
        src="../assets/images/social-icons/instagram-fill.svg"
        alt="By Line Mimarlık  Instagram"
        width="24"
      />
      <img
        src="../assets/images/social-icons/linkedin-original.svg"
        alt=" By Line Mimarlık Linkedin"
        width="24"
      />
    </div>

    <div class="">
      <img
        src="../assets/images/icons/close.svg"
        alt="Kapat"
        width="25"
        class="absolute top-5 right-5"
        @click="closeMenu"
      />
    </div>

    <div class="mt-8">
      <img src="../assets/images/icons/mark.svg" alt="By Line Mimarlı" width="200" class="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const isVisible = ref(false);

const closeMenu = () => {
  isVisible.value = false;
};

const toggleMobileMenu = () => {
  isVisible.value = !isVisible.value;
};

const watchRoute = watch(route,(to,from)=>{
    if(isVisible){
        isVisible.value = false;
    }
})

</script>

<style scoped></style>
