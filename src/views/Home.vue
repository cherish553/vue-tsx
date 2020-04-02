<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';


// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
