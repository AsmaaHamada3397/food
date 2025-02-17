
 <template>
  <div class="text-center">
    <h1 class="text-[#2C2F24] text-[55px] my-15 font-serif font-medium leading-[60.5px]">Browse Our Menu</h1>

    <!-- Grid container -->
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-10 mx-auto text-center place-items-center">

      <!-- Loop through cards -->
      <div v-for="card in cards" :key="card.title" class="border border-[#DBDFD0] p-5 rounded-[12px] h-[375px] w-[306px] text-center">

        <div class="relative text-center bg-[#DBDFD0] inline-block rounded-full h-[100px] w-[100px] mt-5">
          <img class="w-[48px] h-[50px] my-6 absolute left-7 bottom-0" :src="card.image"/>
        </div>

        <h1 class="text-[#2C2F24] font-bold py-4 text-[24px] leading-[30px] tracking-[-3%]">{{ card.title }}</h1>
        <p class="px-2 text-[#414536] text-[16px] leading-[24px] font-normal">{{ card.description }}</p>
        <button class="text-[#AD343E] text-[16px] font-bold pt-8 cursor-pointer leading-[24px]">{{ card.buttonText }}</button>
      </div>

    </div>
  </div>
</template>


<script>
import teaImage from "../../assets/images/home/menu/tea 1.svg"
import drinks from "../../assets/images/home/menu/drinks.svg"
import dishes from "../../assets/images/home/menu/m-dishes.svg"
import desserts from "../../assets/images/home/menu/group.svg"

export default {
  name: 'HomeMenu',
  data() {
    return {
     cards:[
       {
         title: 'Breakfast',
         description: 'In the new era of technology we look in the future with certainty and pride for our life.',
         buttonText: 'Explore Menu',
         image: teaImage
       },
       {
        title: "Main Dishes",
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        buttonText: 'Explore Menu',
        image: dishes
       },
       {
        title: "Drinks",
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        buttonText: 'Explore Menu',
        image: drinks
       },
       {
        title: "Desserts",
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        buttonText: 'Explore Menu',
        image: desserts
       }
     ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
