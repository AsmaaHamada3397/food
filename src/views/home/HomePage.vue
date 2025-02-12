<template>
  <div>
    <HeroSec/>
    <our-menu/>
    <HealthyFood/>
    <OurEvents/>
    <OurDelivery/>
    <CustomersReview/>
    <BlogsArticles/>
  </div>
</template>

<script>
  import HeroSec from '../../components/home/HeroSec.vue'
  import OurMenu from '../../components/home/OurMenu.vue'
  import HealthyFood from '../../components/home/HealthyFood.vue'
  import OurEvents from '../../components/home/OurEvents.vue'
  import OurDelivery from '../../components/home/OurDelivery.vue'
  import CustomersReview from '../../components/home/CustomersReview.vue'
  import BlogsArticles from '../../components/home/BlogsArticles.vue'

  export default {
    name: 'HomePage',
    components: {
      HeroSec,
      OurMenu,
      HealthyFood,
      OurEvents,
      OurDelivery,
      CustomersReview,
      BlogsArticles,
    },
  }
</script>
