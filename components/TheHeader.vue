<template>
  <nav
    class="bg-white text-black dark:bg-zinc-900 dark:text-white fixed w-full z-20 top-0 left-0 hidden md:block"
  >
    <div
      class="hidden md:flex justify-between items-center py-4 px-10 md:px-8 lg:px-10 xl:px-20"
    >

      <nuxt-link to="/">
        <img :src="logoSource" alt="By Line Mimarlık" class="logo inline-block"  />
        <span class="inline-block ml-5 text-md md:text-lg lg:text-xl xl:text-3xl brandName">By Line Mimarlık</span>
      </nuxt-link>

      <div
        class="flex flex-row gap-8 xl:gap-10 md:text-md lg:text-lg xl:text-lg cursor-pointer"
      >
        <nuxt-link to="/">Anasayfa</nuxt-link>
        <nuxt-link to="hakkimizda">Hakkımızda</nuxt-link>
        <nuxt-link to="hizmetlerimiz">Hizmetlerimiz</nuxt-link>
        <nuxt-link to="#whyUs" @click="scrollToSection('whyUs')"
          >Neden Biz?</nuxt-link
        >
        <nuxt-link to="/iletisim">İletişim</nuxt-link>
      </div>

      <div class="relative">
        <nuxt-link
          class="bg-orange-600 hvr-shutter-in-vertical text-white px-6 py-3 rounded-md md:text-md lg:text-lg xl:text-lg cursor-pointer hvr-shutter-out-horizontal"
        >
          Hemen Teklif Al
        </nuxt-link>
      </div>
    </div>
  </nav>

  <!-- mobile-menu -->
  <mobileMenu />
</template>

<script setup>
import { ref, onMounted } from "vue";
import logoWhite from "../public/images/logos/by-line-white.svg ";
import logoBlack from "../public/images/logos/by-line-black.svg";
import mobileMenu from "./mobileMenu.vue";

const preferDarkMode = ref("");

const scrollToSection = (sectionID) => {
  const section = document.querySelector(`#${sectionID}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  preferDarkMode.value = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
});

const logoSource = computed(() => {
  return preferDarkMode.value ? logoWhite : logoBlack;
});


</script>

<style lang="css">
.logo {
  height: 70px;
}

.brandName{
  font-family: "Dancing_Script variant0", Tofu  !important;
}
</style>
