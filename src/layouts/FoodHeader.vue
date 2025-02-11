<template>
  <div>
    <header>
      <!--contacts-->
      <div class="bg-[#474747] text-xs text-white flex justify-between px-9 h-8 items-center">
        <div class="flex items-center">
          <div class="me-4">
            <span class="text-[16px] font-thin"
              ><img class="px-1 pb-0.5 h-4 inline" src="../assets/images/header/phone.svg" alt="" />
              (414) 857 - 0107</span
            >
          </div>
          <div>
            <span class="text-[16px] font-thin"
              ><img
                class="px-2 pb-0.5 h-[13px] inline"
                src="../assets/images/header/mail.svg"
                alt=""
              />yummy@bistrobliss</span
            >
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <div>
              <a href="#">
                <img
                  class="h-4 shadow-2xl rounded-3xl opacity-85 inline"
                  src="../assets/images/header/logo-fb-simple 2.svg"
                  alt=""
                />
              </a>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <nav></nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'FoodHeader',
}
</script>
