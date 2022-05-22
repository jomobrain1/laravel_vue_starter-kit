'<template>
 
 <div class="home">
 <NavLinks></NavLinks>

 </div>
  
</template>

<script>

import NavLinks from "../views/NavLinks.vue"

export default {
  components:{NavLinks}
 }
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 35px;
}

</style>
