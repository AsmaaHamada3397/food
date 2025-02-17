<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2  p-20 relative mt-25 h-220 bg-[#F9F9F7]">
    <div>
      <img :src="container.images" alt="" class="w-[599px] h-[566]" />
      <div
        class="bg-[#474747] text-white h-[321px] w-[411px] p-10 rounded-2xl absolute left-75 bottom-45"
      >
        <div>
          <h1 class="text-[24px] pb-9 font-bold leading-[30px] tracking-[-3%] text-white">Come and visit us</h1>
          <img :src="container.phone" alt="" class="inline w-[24px] h-[24px]" />
          <span class="font-normal leading-[24px] text-[16px] ps-4 text-[#F9F9F7]">(414) 857 - 0107</span>
          <div class="pt-8">
            <img :src="container.email" alt="" class="inline w-[24px] h-[24px]" />
            <span class="font-normal leading-[24px] text-[16px] ps-4 text-[#F9F9F7]">happytummy@restaurant.com</span>
          </div>
          <div class="pt-8 max-w-[90%] flex items-start">
            <img :src="container.location" alt="" class="inline w-[24px] h-[24px]" />
            <span class="font-normal leading-[24px] text-[16px] ps-3 text-[#F9F9F7]"
              >837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="grid place-content-center ms-18 mb-25">
      <h1 class="text-[55px] text-[#2C2F24] leading-[60.5px] font-medium font-serif">We provide healthy food for your family.</h1>
      <p class="text-lg text-[#2C2F24] py-8 font-medium leading-[28px]">Our story began with a vision to create a unique dining experience that merges fine dining,
        exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor
        our local roots while infusing a global palate.
      </p>

      <p class="text-[#414365] text-[16px] pb-4 font-normal leading-[24px]">At place, we believe that dining is not just about food,
        but also about the overall experience. Our staff, renowned for their warmth and dedication,
        strives to make every visit an unforgettable event.
      </p>
      <div class="text-start">
        <button class="cursor-pointer mt-4 border-[2px] border-[#2C2F24] text-[16px] w-[200px] text-[#182226] font-bold rounded-4xl px-3 py-4 leading-[24px]">
          More About Us
        </button>
      </div>


    </div>
  </div>
</template>

<script>
import image from '../../assets/images/home/image.svg'
import phone from '../../assets/images/header/phone.svg'
import email from '../../assets/images/header/mail.svg'
import location from '../../assets/images/home/location-marker.svg'

export default {
  name: 'healthyFood',
  props: {},
  data() {
    return {
      container: {
        images: image,
        phone: phone,
        email: email,
        location: location,
      },
    }
  },
}
</script>
