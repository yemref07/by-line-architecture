<template>

  <footer class="footer-bg footer relative mt-10">
    <div class="container mx-auto relative z-20 px-5 sm:px-10 md:px-20 lg:px-24 xl:px-40 py-10 md:py-20">
      <div class="grid md:grid-cols-2 items-center border-b pb-10">
        <div class="flex flex-col justify-start items-start">
          <img
            src="../assets/images/logos/logo-white.svg"
            alt="By Line Mimarlık Logo"
            width="150"
          />
          <p class="text-slate-300 text-md  w-full md:w-2/3 mt-5">
            2020 yılında Bursa’ da kurulan By Line Mimarlık, mimari, iç mimari
            ve uygulama alanlarında tasarım mükemmelliği sunan çok disiplinli
            bir tasarım firmasıdır.
          </p>
        </div>

        <div class="text-slate-300 mt-10 md:mt-0 md:text-end">
          <div class="flex flex-col">

            <h1 class="font-semibold text-3xl">İLETİŞİM</h1>

            <div class="mt-5 flex flex-col">
              <a href="mailto:"> Email:info@bylinemimarlik.com.tr </a>
              <a href=""> Adres:Nilüfer / Bursa </a>
              <a href="tel:"> Telefon: +90 534 499 76 52 </a>
            </div>
            
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 mt-20">

        <div class="text-slate-300 text-center md:text-start">
          <p>Copyright © 2023 By Line®</p>
        </div>

        <div class="flex justify-center md:justify-end items-center gap-1 mt-5 md:mt-0">
          <a href="" class="cursor-pointer">
            <img
              src="../assets/images/social-icons/instagram-fill.svg"
              alt=""
              width="25"
            />
          </a>

          <a href="" class="cursor-pointer">
            <img
              src="../assets/images/social-icons/twitter-original.svg"
              alt=""
              width="25"
            />
          </a>

          <a href="" class="cursor-pointer">
            <img
              src="../assets/images/social-icons/facebook-fill.svg"
              alt=""
              width="25"
            />
          </a>

          <a href="" class="cursor-pointer">
            <img
              src="../assets/images/social-icons/linkedin-original.svg"
              alt=""
              width="25"
            />
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
  z-index: 1;
}

.footer-bg {
  background: url("../assets/images/footer/footer-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 400px;
}
</style>
