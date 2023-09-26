<template>
  <HeroSection
    title="Hizmetlerimiz"
    desc=" By Line Mimarlık olarak hayallerinizi gerçekleştirmek için buradayız."
  />

  <div class="container mx-auto px-5 lg:px-20 xl:px-32 mt-10">
    <div class="grid md:grid-cols-4 gap-4 justify-center items-center">
      <div class="">
        <h2 class="text-magenta text-xl font-semibold">By Line Mimarlık</h2>
        <h1 class="text-night text-4xl font-bold mt-3">
          Mimarlık Hizmetlerimiz
        </h1>
      </div>

      <div class="col-span-3 md:text-end">
        <p class="text-lg text-black">
          "Her Yapı, Mimari Sanatla Dokunuş Bulur ve Biz, Yaşam Alanlarınızı Bu
          Sanatla Yeniden Tanımlamak İçin Buradayız. Detaylardaki Estetik, Her
          Anınızı Özel Kılar ve Mimarlık Tutkumuz, Sizlere Yeni Bir Yaşam
          Deneyimi Sunuyor. Hadi, Geleceğinizi Mimarî Sanatla Şekillendirin ve
          Hayallerinizi Gerçeğe Dönüştürün."
        </p>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-5">
      <div class="" v-for="(item, index) in services" :key="index">
        <div class="service-card px-6 py-6 rounded-md">
          <img
            :src="getImageUrl(item.image)"
            :alt="item.title"
            class="w-full rounded-md"
          />
          <h2 class="mt-5 xl:text-3xl font-semibold">{{item.title}}</h2>
          <p class="mt-3">
          {{item.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import heroSection from "~/components/heroSection.vue";
import serviceData from '../static/service.json'


const services = ref(serviceData.services);
console.log(services.value)

function getImageUrl(name) { 
  return `/images/services/service${name}.jpg`;
}

</script>

<style scoped>
.service-card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
