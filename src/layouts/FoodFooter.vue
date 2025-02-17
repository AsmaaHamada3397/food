<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-3 py-15 bg-[#474747] px-30 placement-center "
    >
      <!--sec 1-->
      <div class=" md:w-[78%]">
        <div class="flex justify-start items-center">
          <img class="w-[55.54px] h-[53.66px]" src="../assets/images/footer/japanese-food.svg" alt="" />
          <span class="text-white text-[32.67px] italic ps-2 font-serif font-semibold leading-[29.3px] tracking-[-0.4px]"> Bistro Bliss </span>
        </div>
        <p
          class="text-start sm:w-full text-[14px] my-6 text-[rgba(255,255,255,0.5)]"
        >
          In the new era of technology we look a in the future with certainty and pride to for our
          company and.
        </p>
        <div class="flex justify-start items-center my-3">
          <div>
            <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] mx-2 cursor-pointer">
              <img class="ps-[5px] h-4" src="../assets/images/header/logo-twitter 2.svg" alt="" />
            </button>
          </div>
          <div>
            <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] cursor-pointer">
              <img class="ps-2.5 h-4" src="../assets/images/header/logo-fb-simple 2.svg" alt="" />
            </button>
          </div>
          <div>
            <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] cursor-pointer mx-2">
              <img class="ps-[7px] h-4" src="../assets/images/header/logo-instagram 1.svg" alt="" />
            </button>
          </div>
          <div>
            <button class="bg-[#AD343E] h-[30px] w-[30px] rounded-[50%] cursor-pointer">
              <img class="ps-1.5 h-4" src="../assets/images/header/logo-github 1.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <!--sec 2-->
      <div class="text-start pt-4">
        <span class="text-white font-medium">Pages</span>
        <ul class="text-start py-5">
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/home">Home</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/menu">Menu</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/">Pricing</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
          <li class="text-[rgba(255,255,255,0.7)] font-extralight py-2">
            <RouterLink to="/">Delivery</RouterLink>
          </li>
        </ul>
      </div>

      <!--Sec 3-->
      <div class="text-start pt-4">
        <span class="text-white font-medium">Utility Pages</span>
        <ul class="text-start py-5">
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
      <div class=" pt-4 md:ms-15">
        <span class="text-white font-bold text-[16px] leading-[24px]">Follow Us On Instagram</span>
        <div class="grid grid-cols-2 py-8">
          <img class="  " src="../assets/images/footer/Mask group.svg" />
          <img class="ms-2" src="../assets/images/footer/Mask group (1).svg" alt="" />
          <img class="mt-2" src="../assets/images/footer/Mask group (2).svg" alt="" />
          <img class="mt-2 ms-2" src="../assets/images/footer/Mask group (3).svg" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-[#474747]">
      <hr class="mx-30 pt-5 text-[rgba(173,178,158,0.16)] font-extrabold" />
      <p class="py-10 text-[16px] text-[rgba(173,178,158,0.9)] text-center font-normal leading-[24px]">Copyright &copy; 2023 Hashtag Developer. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodFooter',
}
</script>

<style scoped></style>
