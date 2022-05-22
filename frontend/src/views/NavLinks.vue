'<template>
   <!-- Navbar -->
    <nav class="relative container mx-auto p-6">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link :to="{name:'Home'}"  class="pt-2">
          The CoddingMall
        </router-link>
        <!-- Menu Items -->
        <div class="hidden space-x-6 md:flex">
          <a class="hover:text-darkGrayishBlue">Home</a>
           <a class="hover:text-darkGrayishBlue">Items</a>
          <a  class="hover:text-darkGrayishBlue">FrontEnd</a>
     
     
        </div>
        <!-- Button -->
      <a
     
        class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-lg baseline hover:bg-brightRedLight md:block"
       >Get Started
      </a>

        <a @click="logout"
        
        class="hidden cursor-pointer p-3 px-6 pt-2 text-white bg-brightRed rounded-lg baseline hover:bg-brightRedLight md:block"
       >Logout
      </a>
        

        <!-- Hamburger Icon -->
        <button
          id="menu-btn" @click="menuTrigger"
          class="block hamburger md:hidden focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a >Pricing</a>
          <a >Product</a>
        
          <a >Careers</a>
          <a >Community</a>
        </div>
      </div>
      <router-view></router-view>
    </nav>
</template>

<script >
// import {useStore} from "vuex"
import {computed} from "vue"
import {useRouter} from "vue-router"
import auth from "../store/auth"

export default {
  computed : {
        isLoggedIn : function(){ 
         	return auth.getters.isLoggedIn
        }
      },
 

  setup() {
    // const store=useStore()
    const router = useRouter();
    
 
// logout function start

function logout() {
    auth.dispatch("logout").then(() => {
        router.push({
          name: "Login",
        });
      });
 }

//Show menu start
function menuTrigger(){
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')

}
 return {
      user:computed(()=>auth.state.user.data),
      logout,
      menuTrigger
      
    }
  },
}
 

</script>

