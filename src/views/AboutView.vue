<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Home page</h1>
    <form>
      <fieldset>
        <legend></legend>
        <div class="form__group">
          <BaseInput 
          type="text" 
          label="name" 
          placeholder="name"
          v-model="inputName"
          />
        </div>
        {{ inputName }}
        <div class="form__group">
          <BaseInput 
          type="img" 
          label="img"  
          placeholder="img"
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  components: {
    BaseInput
  },
  setup() {
    const inputName = ref("");
    

    return {
      inputName
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
