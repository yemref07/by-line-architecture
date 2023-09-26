<template>
  <div>
    <swiper-container
      ref="mainSlider"
      autoplay-delay="3500"
      autoplay-disable-on-interaction="false"
      @slidechange="onSlideChange"
    >

      <swiper-slide
        class="slide slide1 flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 lg:px-40"
      >
        <h1
          class="font-bold text-3xl md:text-4xl lg:text-6xl text-magenta shadow-sm"
          :class="{'tracking-in-expand':isActiveSlide(0)}"
        >
          By Line
          <span class="text-night"> Mimarlık </span>
        </h1>
        <h2 class="font-semibold text-xl lg:text-3xl mt-5 text-slate-200">
          Mükemmeliyetçiler ve Hayalperestler İçin
        </h2>
        <h3 class="font-bold text-xl lg:text-3xl text-night">
          Tasarım ve Dizayn
        </h3>
        <a
          href="tel:+905347656859"
          class="text-white bg-night px-5 md:px-10 py-2 md:py-3 mt-5 md:mt-10 rounded-md text-lg md:text-xl hover:opacity-90 transition-all"
        >
          Hemen Teklif Al
      </a>
      </swiper-slide>

      <swiper-slide
        class="slide slide2 flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 lg:px-40"
      >
        <h1
          class="font-bold text-3xl md:text-4xl lg:text-6xl text-magenta shadow-sm"
          :class="{'tracking-in-expand':isActiveSlide(1)}"
        >
          By Line
          <span class="text-night"> Mimarlık </span>
        </h1>
        <h2 class="font-semibold text-xl lg:text-3xl mt-5 text-slate-200">
          Silüet Yapı, Mimari, İç mimari ve Uygulama
        </h2>
        <a
          href="tel:+905347656859"
          class="text-white bg-night px-5 md:px-10 py-2 md:py-3 mt-5 md:mt-10 rounded-md text-lg md:text-xl hover:opacity-90 transition-all"
        >
          Hemen Teklif Al
      </a>
      </swiper-slide>

      <swiper-slide
        class="slide slide3 flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 lg:px-40"
      >
        <h1
          class="font-bold text-3xl md:text-4xl lg:text-6xl text-magenta shadow-sm"
          :class="{'tracking-in-expand':isActiveSlide(2)}"
        >
          By Line
          <span class="text-night"> Mimarlık </span>
        </h1>
        <h2 class="font-semibold text-xl lg:text-3xl mt-5 text-slate-200">
          Değişen yaşam koşullarına ayak uydurabilen zamansız ve <br />
          sürdürülebilir mekânlar tasarlıyoruz.
        </h2>
        <a
          href="tel:+905347656859"
          class="text-white bg-night px-5 md:px-10 py-2 md:py-3 mt-5 md:mt-10 rounded-md text-lg md:text-xl hover:opacity-90 transition-all"
        >
          Hemen Teklif Al
      </a>
      </swiper-slide>


    </swiper-container>

    <section id="aboutUs">
      <div class="container mx-auto px-5 lg:px-20 xl:px-40 mt-10">
        <div class="grid md:grid-cols-2 gap-10">
          <div class="relative flex">
            <img src="../assets/images/about/large-pic.jpg" alt="" class="" />
            <img
              src="../assets/images/about/small-pic.jpg"
              alt=""
              class="absolute top-1/4 right-0 w-1/2"
            />
          </div>
  
          <div class="flex flex-col justify-center relative">
            <div class="">
              <h1 class="text-magenta font-bold text-md mb-2 inline-flex">
                By Line Mimarlık
              </h1>
              <h1 class="text-night font-bold text-4xl">Hakkımızda</h1>
            </div>
  
            <div class="">
              <p class="mt-5 text-md">
                2020 yılında Bursa’ da kurulan By Line Mimarlık, mimari, iç mimari
                ve uygulama alanlarında tasarım mükemmelliği sunan çok disiplinli
                bir tasarım firmasıdır.
              </p>
              <p class="mt-3 text-md">
                Bunu yaparken disiplinler arası etkileşim ve sonucunda doğan fikir
                zenginliğinden yararlanıyoruz. Alanlarında uzman kadromuzla
                tasarım ve uygulama ihtiyaçlarınıza yenilikçi ve yaratıcı çözümler
                üretiyoruz.
              </p>
              <p class="mt-3 text-md">
                Gerek tasarım, gerek uygulama ve tadilat işlerinizde sektörün önde
                gelen tedarikçileriyle yaptığımız iş birlikleri sayesinde ekonomik
                ve ulaşılabilir çözümler sunuyoruz, bütçenize saygı gösteriyoruz.
              </p>
              <img
                src="../assets/images/shapes/line-area-shape.png"
                alt=""
                class="absolute w-1/2 left-1/2 top-0 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="container mx-auto px-5 lg:px-20 xl:px-40 mt-10">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="flex flex-col justify-center relative">
          <div class="">
            <h1 class="text-magenta font-bold text-md mb-2 inline-flex">
              By Line Mimarlık
            </h1>
          </div>

          <div class="">
            <p class="mt-5 text-md">
              2020 yılında Bursa’ da kurulan By Line Mimarlık, mimari, iç mimari
              ve uygulama alanlarında tasarım mükemmelliği sunan çok disiplinli
              bir tasarım firmasıdır.
            </p>
            <p class="mt-3 text-md">
              Bunu yaparken disiplinler arası etkileşim ve sonucunda doğan fikir
              zenginliğinden yararlanıyoruz. Alanlarında uzman kadromuzla
              tasarım ve uygulama ihtiyaçlarınıza yenilikçi ve yaratıcı çözümler
              üretiyoruz.
            </p>
            <p class="mt-3 text-md">
              Gerek tasarım, gerek uygulama ve tadilat işlerinizde sektörün önde
              gelen tedarikçileriyle yaptığımız iş birlikleri sayesinde ekonomik
              ve ulaşılabilir çözümler sunuyoruz, bütçenize saygı gösteriyoruz.
            </p>
            <img
              src="../assets/images/shapes/shape-10.png"
              alt=""
              class="absolute w-50 right-100 top-0 opacity-75"
            />
          </div>
        </div>

        <div class="flex relative justify-end items-end">
          <img
            src="../assets/images/about/about2.jpg"
            alt=""
            class="about-img2"
          />
        </div>
      </div>
    </div>

    <section id="services">
      <serviceSlider />
    </section>

    <section id="whyUs">
      <div class="container mx-auto px-5 lg:px-20 xl:px-40 mt-20">
  
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-magenta font-bold text-md mb-2 inline-flex">Bizi Neden Seçmelisiniz</h1>
          <h2 class="text-night font-bold text-4xl">By Line Mimarlık</h2>
        </div>
  
        <div class="grid md:grid-cols-3 mt-10 gap-10">
  
          <div class="py-5 md:py-10">
            <div class="flex gap-5">
              <img src="../assets/images/icons/1.png" alt="" class="icon-choseUs">
              <div class="flex flex-col">
                <h2 class="font-bold text-xl">Uzman Kadro</h2>
                <p class="mt-1">Alanında uzman ve deneyimli bir ekip hizmet vermektedir.</p>
              </div>
            </div>
  
            <div class="flex gap-5 mt-5 lg:mt-10 xl:mt-20">
              <img src="../assets/images/icons/2.png" alt="" class="icon-choseUs">
              <div class="flex flex-col">
                <h2 class="font-bold text-xl">Yenilikçi</h2>
                <p class="mt-1">Hayallerinizi gerçekleştirme için buradayız</p>
              </div>
            </div>
          </div>
  
          <div class="">
            <img src="../assets/images/logos/demo-logo.jpg" alt="" class="w-full rounded-lg">
          </div>
  
          <div class="py-5 md:py-10">
            
            <div class="flex gap-5">
              <div class="flex flex-col md:text-end">
                <h2 class="font-bold text-xl">Uzman Kadro</h2>
                <p class="mt-1">Alanında uzman ve deneyimli bir ekip hizmet vermektedir.</p>
              </div>
              <img src="../assets/images/icons/3.png" alt="" class="icon-choseUs">
            </div>
  
            <div class="flex gap-5 mt-5 lg:mt-10 xl:mt-20">
              <div class="flex flex-col md:text-end">
                <h2 class="font-bold text-xl">Yenilikçi</h2>
                <p class="mt-1">Hayallerinizi gerçekleştirme için buradayız</p>
              </div>
              <img src="../assets/images/icons/4.png" alt="" class="icon-choseUs">
            </div>
  
          </div>
  
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import serviceSlider from "~/components/serviceSlider.vue";
import {ref,onMounted} from 'vue'
register();
const activeSlide = ref(null);

const onSlideChange = (e) => {
  activeSlide.value = e.detail[0].activeIndex;  
}

const isActiveSlide = (index)=>{
  return activeSlide.value === index ;
}


</script>

<style scoped>
.slide {
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 700px;
}

@media only screen and (max-width: 600px) {
  .slide{
    height: 300px;
  }
}


.slide1 {
  background: url(../assets/images/slides/slide1.jpg);
}
.slide2 {
  background: url(../assets/images/slides/slide2.jpg);
}
.slide3 {
  background: url(../assets/images/slides/slide5.jpg);
}

.bg-shape {
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(../images/shapes/line-area-shape.png);
  background-position: center;
}

.tracking-in-expand {
  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.about-img2{
  clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
}



</style>
