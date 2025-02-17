<template>
  <div class="p-20">
    <h1 class="text-[55px] font-medium w-[50%] leading-[60.5px] text-[#2c2f24] font-serif">We also offer unique services for your events</h1>

    <div class="grid sm:grid-cols-1 lg:grid-cols-4 py-15 gap-4">
      <div v-for="card in cards" :key="card.title">
        <img :src="card.image"
        alt="caterings"
        class-="rounded-xl">
        <h1 class="text-[#2C2F24] text-[24px] font-bold pt-4 pb-3 leading-[30px] tracking-[-3%] ">{{ card.title }}</h1>
        <p class="text-[#414536] text-[16px] font-normal leading-[24px]">{{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import caterings from "../../assets/images/home/services/kebab-set-table 1.svg"
import birthdays from "../../assets/images/home/services/birthdays.svg"
import weddings from "../../assets/images/home/services/happy-man-wife-sunny-day 1.svg"
import events from "../../assets/images/home/services/events.svg"

export default {
  data() {
    return {
      cards: [
        {
          title: "Caterings",
          image: caterings,
          description: "In the new era of technology we look in the future with certainty for life."
        },
        {
          title: "Birthdays",
          image: birthdays,
          description: "In the new era of technology we look in the future with certainty for life."
        },
        {
          title: "Weddings",
          image: weddings,
          description: "In the new era of technology we look in the future with certainty for life."
        },
        {
          title: "Events",
          image: events,
          description: "In the new era of technology we look in the future with certainty for life."
        }

      ]
    }
  }

}
</script>
