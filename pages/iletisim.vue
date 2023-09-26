<template>
  <div>
    <div
      class="flex flex-col justify-center md:justify-end items-start bg-hero relative h-60 md:h-96"
    >
      <div class="black-overlay"></div>
      <div
        class="container mx-auto px-10 md:px-20 lg:px-40 xl:px-52 md:pb-20 z-10"
      >
        <div class="">
          <h1 class="text-2xl lg:text-4xl xl:text-5xl text-white font-bold">
            İletişim
          </h1>
        </div>
        <div class="md:w-1/2">
          <p class="mt-2 text-white text-md lg:text-lg">
            Hayallerinizi mükemmeliyetçi hizmet anlaşımız ve yenilikçi
            çözümlerimiz ile sizlere sunuyoruz
          </p>
        </div>
      </div>
    </div>

    <div class="bg-zinc-100 p-5 md:p-10 lg:p-20">
      <div class="container mx-auto px-1 md:px-20 lg:px-20 xl:px-52">
        <div class="grid lg:grid-cols-2 gap-5 md:gap-0">
          <div class="bg-white p-5 md:p-10 lg:p-20">
            <h2 class="text-2xl md:text-2xl xl:text-4xl font-bold mb-5">
              By Line Mimarlık
            </h2>

            <div class="flex just-start items-center gap-5 my-8">
              <img
                src="../assets/images/icons/location.png"
                alt=""
                width="40"
              />
              <p class="font-semibold">
                Üçevler, İzmir Yolu Cd No:241/D, 16120 Nilüfer/Bursa
              </p>
            </div>

            <div class="flex just-start items-center gap-5 my-8">
              <img src="../assets/images/icons/cell.png" alt="" width="40" />
              <p class="font-semibold">
                <a href="tel:05347656859">+90 534 765 68 59</a>
                <br />
                <a href="tel:05347656859">+90 534 765 68 59</a>
              </p>
            </div>

            <div class="flex just-start items-center gap-5 my-8">
              <img src="../assets/images/icons/email.png" alt="" width="40" />
              <p class="font-semibold">
                <a href="mailto:info@bylinemimarlik.com.tr"
                  >info@bylinemimarlik.com.tr</a
                >
              </p>
            </div>

            <div class="flex just-start items-center gap-5 my-8">
              <img src="../assets/images/icons/phone.png" alt="" width="40" />
              <p class="font-semibold">
                <a href="tel:212223332222">+90 212 222 111 11 11</a>
              </p>
            </div>
          </div>

          <div class="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12187.536094590398!2d28.9410905!3d40.2116427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11753b698ce3%3A0x5a5d7252a7a0e3e3!2sWestpoint%20Office!5e0!3m2!1str!2str!4v1694302442327!5m2!1str!2str"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto px-1 md:px-20 lg:px-20 xl:px-52 mt-10 lg:mt-20"
    >
      <div class="grid lg:grid-cols-2">
        <div class="">
          <img
            src="../assets/images/contact/contact2.jpg"
            alt=""
            class="h-full"
          />
        </div>

        <div class="bg-zinc-100 p-5 md:p-10 lg:p-10">
          <h2 class="text-2xl md:text-2xl xl:text-4xl font-bold mb-10">
            İletişim Formu
          </h2>

          <form>
            <div class="flex gap-5 flex-wrap">
              <div class="flex flex-col flex-grow">
                <input
                  v-model="formData.nameSurname"
                  type="text"
                  placeholder="Ad Soyad*"
                  class="px-5 py-3 rounded-md"
                  :class="{'border-2 border-red-400':errorMsgs.nameSurname}"
                />
                <span
                  class="text-xs text-red-500 mt-1 text-center"
                  v-if="errorMsgs.nameSurname"
                  >{{ errorMsgs.nameSurname }}</span
                >
              </div>

              <div class="flex flex-col flex-grow">
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="E-Posta*"
                  class="px-5 py-3 rounded-md"
                  :class="{'border-2 border-red-400':errorMsgs.email}"
                />
                <span
                  class="text-sm text-red-500 mt-1 text-center"
                  v-if="errorMsgs.email"
                  >{{ errorMsgs.email }}</span
                >
              </div>
            </div>

            <div class="flex mt-3 lg:mt-5 flex-wrap gap-5">
              <div class="flex flex-col flex-grow">
                <input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="Telefon Numarası*"
                  class="px-5 py-3 rounded-md"
                  :class="{'border-2 border-red-400':errorMsgs.phone}"
                />
                <span
                  class="text-sm text-red-500 mt-1 text-center"
                  v-if="errorMsgs.phone"
                  >{{ errorMsgs.phone }}</span
                >
              </div>

              <div class="flex flex-col flex-grow">
                <input
                  v-model="formData.service"
                  type="text"
                  placeholder="Hizmet*"
                  class="px-5 py-3 rounded-md"
                  :class="{'border-2 border-red-300':errorMsgs.service}"
                />
                <span
                  class="text-sm text-red-500 mt-1 text-center"
                  v-if="errorMsgs.service"
                  >{{ errorMsgs.service }}</span
                >
              </div>

              <input
                v-model="trap"
                type="text"
                placeholder="trap"
                class="px-5 py-3 rounded-md hidden"
              />
            </div>

            <div class="flex flex-col mt-2 gap-5">
              <textarea
                v-model="formData.message"
                name="message"
                rows="5"
                class="mt-5 w-full px-5 py-3 rounded-md"
                placeholder="Mesajınız"
              ></textarea>
              <button
                type="submit"
                class="text-white bg-night px-5 py-2 hover:opacity-80 transition-opacity rounded-md"
                @click="sendFormData"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const formData = ref({
  nameSurname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const trap = ref("");

const errorMsgs = ref({
  nameSurname: "",
  email: "",
  phone: "",
  service: "",
});

const isValid = ref(false);

const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};

const clearError = (field) => {
  errorMsgs.value[field] = "";
};

const clearInputs = (formData)=>{
  Object.entries(formData).forEach(([key,value])=>{
    formData[key] = "";
  })
}

const checkValidity = () => {
  isValid.value = true;

  if (formData.value.email === "" ) {
    isValid.value = false;
    errorMsgs.value.email = "E-Posta Alanı Zorunludur"
  } 

  else if(!emailValidation(formData.value.email)){
    isValid.value = false;
    errorMsgs.value.email = "Lütfen Geçerli Bir E-Posta Adresi Girin"
  }
  
  else {
    clearError('email');
  }

  if (formData.value.nameSurname === "") {
    isValid.value = false;
    errorMsgs.value.nameSurname = "Ad Soyad Zorunludur";
  } 
  
  else {
    clearError('nameSurname');
  }

  if (formData.value.phone === "") {
    isValid.value = false;
    errorMsgs.value.phone = "Telefon Alanı Zorunludur";
  } else {
    clearError('phone');
  }

  if (formData.value.service === "") {
    isValid.value = false;
    errorMsgs.value.service = "Hizmet Alanı Zorunludur";
  } else {
    clearError('service');
  }

};

const sendFormData = (e) => {
  e.preventDefault();
  checkValidity();
  if (isValid.value && trap.value === "") {
    //http post request to related SMTP API
    setTimeout(() => {
      alert('mesaj gönderildi')
    }, 300);
    clearInputs(formData.value)
  }
  else{
    isValid.value = false;
  }

};
</script>

<style scoped>
.bg-hero {
  background: url(../assets/images/heros/contact.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
