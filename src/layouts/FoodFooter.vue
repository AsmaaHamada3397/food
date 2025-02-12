<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-4 bg-[#474747] px-30 placement-center text-center"
  >
    <!--sec 1-->
    <div>
      <div class="flex justify-center items-center">
        <img class="w-[56px] h-[55px]" src="../assets/images/footer/japanese-food.svg" alt="" />
        <span class="text-white italic text-2xl ps-2"> Bistro Bliss </span>
      </div>
      <p class="text-start text-[14px] ps-19 my-6 text-[rgba(255,255,255,0.5)]">
        In the new era of technology we look a in the future with certainty and pride to for our
        company and.
      </p>
      <div class="flex justify-center items-center my-3 me-6">
        <div>
          <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] mx-2">
            <img class="ps-[5px] h-4" src="../assets/images/header/logo-twitter 2.svg" alt="" />
          </button>
        </div>
        <div>
          <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%]">
            <img class="ps-2.5 h-4" src="../assets/images/header/logo-fb-simple 2.svg" alt="" />
          </button>
        </div>
        <div>
          <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] mx-2">
            <img class="ps-[7px] h-4" src="../assets/images/header/logo-instagram 1.svg" alt="" />
          </button>
        </div>
        <div>
          <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%]">
            <img class="ps-1.5 h-4" src="../assets/images/header/logo-github 1.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <!--sec 2-->
    <div>
      <span class="text-white font-medium me-5">Pages</span>
      <ul class="text-start ps-31 py-5">
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/home">Home</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/about">About</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/menu">Menu</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/">Pricing</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/blog">Blog</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/contact">Contact</RouterLink></li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2"><RouterLink to="/">Delivery</RouterLink></li>
      </ul>
    </div>

    <!--Sec 3-->
      <div>
      <span class="text-white font-medium me-45">Utility Pages</span>
      <ul class="text-start ps-5 py-5">
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">Start Here</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">Styleguide</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">Password Protected</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">404 Not Found</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">Licenses</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">Changelog</li>
        <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">View More</li>
      </ul>
    </div>

    <!--Sec 4-->
    <div>
      <span class="text-white font-medium pe-29">Follow Us On Instagram</span>
   <div class="grid grid-cols-2 py-6">
    <img class="  " src="../assets/images/footer/Mask group.svg">
    <img class="ms-2 " src="../assets/images/footer/Mask group (1).svg" alt="">
    <img class=" mt-2 " src="../assets/images/footer/Mask group (2).svg" alt="">
    <img class="mt-2 ms-2 " src="../assets/images/footer/Mask group (3).svg" alt="">

   </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodFooter',
}
</script>

<style scoped>
</style>
