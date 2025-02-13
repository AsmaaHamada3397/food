<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 m-auto p-30 relative">
    <div>
      <img :src="container.images" alt="" class="w-[599px] h-[566]" />
      <div
        class="bg-[#474747] text-white h-[321px] w-[411px] p-10 rounded-2xl absolute left-80 bottom-12"
      >
        <div>
          <h1 class="text-[24px] pb-9 font-medium">Come and visit us</h1>
          <img :src="container.phone" alt="" class="inline w-[24px] h-[24px]" />
          <span class="ps-4 text-[#F9F9F7]">(414) 857 - 0107</span>
          <div class="pt-8">
            <img :src="container.email" alt="" class="inline w-[24px] h-[24px]" />
            <span class="ps-4 text-[#F9F9F7]">happytummy@restaurant.com</span>
          </div>
          <div class="pt-8 max-w-[90%] flex items-start">
            <img :src="container.location" alt="" class="inline w-[24px] h-[24px]" />
            <span class="ps-4 text-[#F9F9F7] leading-tight"
              >837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>hi</h1>
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
