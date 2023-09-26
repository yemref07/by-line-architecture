<template>
  <div class="mt-20 px-1 md:px-0">
    <div class="flex flex-row text-center justify-center mb-10">
      <div class="">
        <h1 class="text-magenta font-bold text-md mb-2 inline-flex">
          By Line Mimarlık
        </h1>
        <h1 class="text-night font-bold text-4xl">Hizmetlerimiz</h1>
      </div>
    </div>
    <swiper-container
      :breakpoints="{
        '450': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :space-between="spaceBetween"
      :loop="true"
      :centered-slides="auto"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        class="service-slide1 service-slide flex flex-col items-center justify-end relative pb-10 px-10"
      >
        <div class="black-overlay hvr-underline-from-left"></div>
        <div class="text-center z-10 text-white">
          <h1 class="text-3xl font-semibold">Uygulama</h1>
          <p class="text-xm mt-3">
            Anahtar teslim inşaat, iç mimari & dekorasyonda baştan sona tasarım
            hizmetlerimiz ile profesyonel deneyimin bir parçası olun!
          </p>
        </div>
      </swiper-slide>

      <swiper-slide
        class="service-slide2 service-slide flex flex-col items-center justify-end relative pb-10 px-10"
      >
        <div class="black-overlay hvr-underline-from-left"></div>
        <div class="text-center z-10 text-white">
          <h1 class="text-3xl font-semibold">Uygulama</h1>
          <p class="text-xm mt-3">
            Anahtar teslim inşaat, iç mimari & dekorasyonda baştan sona tasarım
            hizmetlerimiz ile profesyonel deneyimin bir parçası olun!
          </p>
        </div>
      </swiper-slide>

      <swiper-slide
        class="service-slide3 service-slide flex flex-col items-center justify-end relative pb-10 px-10"
      >
        <div class="black-overlay hvr-underline-from-left"></div>
        <div class="text-center z-10 text-white">
          <h1 class="text-3xl font-semibold">Uygulama</h1>
          <p class="text-xm mt-3">
            Anahtar teslim inşaat, iç mimari & dekorasyonda baştan sona tasarım
            hizmetlerimiz ile profesyonel deneyimin bir parçası olun!
          </p>
        </div>
      </swiper-slide>

      <swiper-slide
        class="service-slide4 service-slide flex flex-col items-center justify-end relative pb-10 px-10"
      >
        <div class="black-overlay hvr-underline-from-left"></div>
        <div class="text-center z-10 text-white">
          <h1 class="text-3xl font-semibold">Uygulama</h1>
          <p class="text-xm mt-3">
            Anahtar teslim inşaat, iç mimari & dekorasyonda baştan sona tasarım
            hizmetlerimiz ile profesyonel deneyimin bir parçası olun!
          </p>
        </div>
      </swiper-slide>

      <swiper-slide
        class="service-slide5 service-slide flex flex-col items-center justify-end relative pb-10 px-10"
      >
        <div class="black-overlay hvr-underline-from-left"></div>
        <div class="text-center z-10 text-white">
          <h1 class="text-3xl font-semibold">Uygulama</h1>
          <p class="text-xm mt-3">
            Anahtar teslim inşaat, iç mimari & dekorasyonda baştan sona tasarım
            hizmetlerimiz ile profesyonel deneyimin bir parçası olun!
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
register();
const spaceBetween = 20;

const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
</script>

<style scoped>
.service-slide {
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 400px;
  border-radius: 10px;
}

.service-slide1 {
  background: url(../assets/images/services/service1.jpg);
}

.service-slide2 {
  background: url(../assets/images/services/service2.jpg);
}

.service-slide3 {
  background: url(../assets/images/services/service3.jpg);
}

.service-slide4 {
  background: url(../assets/images/services/service4.jpg);
}
.service-slide5 {
  background: url(../assets/images/services/service5.jpg);
}
</style>
