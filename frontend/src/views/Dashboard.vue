'<template>
  <section class="contain">
    <h1>Dashboard</h1>

<router-link :to="{name:'VanillaCreate'}">create tutorial</router-link>


  </section>


  <div class="contain">
    <form class="mt-8 space-y-6" @submit="addGroupTitle">
      
        <div class="rounded-md shadow-sm -space-y-px">
           <div>
            <label for="fullname" class="sr-only">Fullname</label>
            <input id="fullname"  name="title" type="text" 
            v-model="group.title"  
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Title" />
          </div>

        </div>
        



        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            
            </span>
            Add title
          </button>
        </div>
      </form>
  </div>


  
</template>


<script setup>

import vanilla from "../store/vanilla";
import { useRouter } from "vue-router";


const router = useRouter();
const group = {
  title: "",
  
};
function addGroupTitle(ev) {
  ev.preventDefault();
  // loading.value = true;
  vanilla
    .dispatch("addGroupTitle", group)
    .then((res) => {
      // loading.value = false;
      router.push({
        name: "Home",
      });
    })
    .catch((error) => {
      console.log(error);
      // loading.value = false;
      // if (error.response.status === 422) {
      //   errors.value = error.response.data.errors;
      // }
    });
}

</script>