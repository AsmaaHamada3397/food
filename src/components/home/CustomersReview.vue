<template>
 <div class="text-center my-15">
  <h1 class="text-[#2C2F24] text-[55px] font-medium leading-[60.5px] font-serif my-15">What Our Customers Say</h1>

  <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4 w-[90%] m-auto">
    <div v-for="review in reviews" :key="review.title" class="bg-[#F9F9F7] p-5 rounded-2xl">
      <h1 class="text-[#AD343E] font-bold text-[24px] leading-[30px] tracking-[-3%]">{{ review.title }}</h1>
      <p class="text-[18px] text-[#414536] text-start px-1 py-8 font-normal leading-[28px]">
       {{ review.review }}
      </p>

      <hr class="text-[#DBDFD0] mx-8">

      <div class="flex justify-start my-5 ms-3">
        <div>
          <img :src="review.image" alt="">
        </div>
        <div class="p-3 text-start">
          <h1 class="font-bold text-[16px] leading-[24px] text-[#2c2f24]">{{ review.name }}</h1>
          <h2 class="text-[16px] font-normal leading-[24px] text-[#414536]">{{ review.city }}</h2>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import Sophire from "../../assets/images/home/customers/Ellipse 19.svg"
import matt from "../../assets/images/home/customers/Image.svg"
import andy from "../../assets/images/home/customers/Image (1).svg"

export default {
  data() {
    return {
      reviews: [
        {
          title: "“The best restaurant”",
          review: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
          name: "Sophire Robson",
          image: Sophire,
          city: "Los Angeles, CA",
        },
        {
          title: "“Simply delicious”",
          review: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
          name: "Matt Cannon",
          image: matt,
          city: "San Diego, CA",
        },
        {
          title: "“One of a kind restaurant”",
          review: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
          name: "Andy Smith",
          image: andy,
          city: "San Francisco, CA",
        }
      ]
    }
  }
}
</script>
