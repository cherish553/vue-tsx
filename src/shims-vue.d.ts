// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

// import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue'
  // import VueRouter from 'vue-router';
  // import { Route } from 'vue-router';
  // import { Store } from 'vuex';
  export default Vue
}

declare module '*.scss' {
  const scss: any

  export default scss
}
