<template>
  <div>
    <FoodHeader/>
    <RouterView />
    <FoodFooter/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import FoodHeader from "./layouts/FoodHeader.vue"
import FoodFooter from "./layouts/FoodFooter.vue"

</script>
