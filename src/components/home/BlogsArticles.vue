<template>
  <div class="p-20 bg-[#F9F9F7]">
    <!--title-->
    <div class="flex justify-between items-center my-15">
      <div>
        <h1 class="text-[55px] text-[#2C2F24]">Our Blog & Articles</h1>
      </div>
      <div>
        <button
          class="cursor-pointer px-6 py-3 rounded-3xl bg-[#AD343E] text-[#FFFFFF] font-bold text-[16px]"
        >
          Read All Articles
        </button>
      </div>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
      <!--Burger-->
      <div class="rounded-xl p-2">
        <img src="../../assets/images/home/blogs/Mask group.svg" alt="" class="w-[636px] h-[456]" />
        <div class="bg-white p-8 rounded-b-xl">
          <p class="font-bold text-[#737865] text-[16px]">January 3, 2023</p>
          <p class="font-medium text-[20px] text-[#2C2F24] my-6">
            The secret tips & tricks to prepare a perfect burger & pizza for our customers
          </p>
          <p class="mb-10">
            Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa
            gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
          </p>
        </div>
      </div>
      <!-- 4 cards-->
      <div class="grid md:grid-cols-2 grid-rows-2 gap-2 mt-2">
      <div
        class="bg-white rounded-xl flex flex-col"
        v-for="card in cards"
        :key="card.title"
      >
        <img :src="card.img" alt="" />
        <div class="p-5 flex-grow flex flex-col justify-evenly">
          <p class="font-bold text-[#737865] text-[16px]">{{ card.date }}</p>
          <p class="font-medium text-[20px] text-[#2C2F24] w-[90%]">
            {{ card.title }}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import fries from "../../assets/images/home/blogs/Mask group (1).svg"
import chicken from "../../assets/images/home/blogs/Mask group (2).svg"
import cake from "../../assets/images/home/blogs/Mask group (3).svg"
import pizza from "../../assets/images/home/blogs/Mask group (4).svg"

export default {
  name: 'BlogAndArticles',
  data() {
    return {
      cards: [
        {
          img: fries,
          title: 'How to prepare the perfect french fries in an air fryer',
          date: 'January 3, 2023',
        },
        {
          img: chicken,
          title: 'How to prepare delicious chicken tenders',
          date: 'January 3, 2023',
        },
        {
          img: cake,
          title: '7 delicious cheesecake recipes you can prepare',
          date: 'January 3, 2023',
        },
        {
          img: pizza,
          title: ' 5 great pizza restaurants you should visit this city',
          date: 'January 3, 2023',
        },
      ],
    }
  },
}
</script>
