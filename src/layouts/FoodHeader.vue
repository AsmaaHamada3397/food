<template>
  <div>
    <header>
      <!--contacts-->
      <div class="bg-[#474747] text-xs text-white flex justify-between px-30 h-10 items-center">
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
            <div class="mx-1">
              <button class="button">
                <img class="h-4" src="../assets/images/header/logo-twitter 2.svg" alt="" />
              </button>
            </div>
            <div class="mx-1">
              <button class="button">
                <img class="h-5 ps-1" src="../assets/images/header/logo-fb-simple 2.svg" alt="" />
              </button>
            </div>
            <div class="mx-1">
              <button class="button">
                <img class="h-5" src="../assets/images/header/logo-instagram 1.svg" alt="" />
              </button>
            </div>
            <div class="mx-1">
              <button class="button">
                <img class="h-5" src="../assets/images/header/logo-github 1.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="flex justify-evenly items-center h-25">
        <div>
          <a href="" class="flex justify-center items-center mb-3" >
            <img class="inline" src="../assets/images/header/japanese-food.svg" alt="" />
            <span class="text-[42px] font-semibold italic ps-2 pt-2 font-serif text-[#474747] leading-[29.3px] tracking-[-0.4px]">
              Bistro Bliss
            </span>
          </a>
        </div>
        <div>
          <ul>
            <li> <RouterLink to="/home">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/menu">Menu</RouterLink></li>
            <li><RouterLink to="/pages">Pages</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div>
          <button class="cursor-pointer px-4 py-2 border-2 border-[#2C2F24] rounded-4xl text-[#182226] font-semibold
          hover:text-white hover:bg-[#AD343E] hover:border-[#AD343E]">Book A Table</button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'FoodHeader',
}
</script>

<style scoped>
.button {
  background-color: rgb(82, 80, 80);
  border: 1px solid rgba(#fff, 0.2);
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding-left: 6px;
}

li{
  list-style-type: none;
  padding: 6px 12px;
  font-size: 16px;
  display: inline;
}

li:hover{
background:#DBDFD0;
border-radius: 20px;
cursor: pointer;
}

</style>
