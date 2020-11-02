<template>
  <div class="container">
    <!-- <div>
      <logo />
      <h1 class="title">
        kaoyan
      </h1>
      <h2 class="subtitle">
        My swell Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div> -->
    <div>
      <p>{{ message }}</p>
      <p>{{ brand }}</p>
      <input v-model="brand">
      <p style="height: 10px;"></p>

      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
      <p v-if="seen">Never gonna give you up</p>
      <button v-on:click="seen = !seen">display</button>
    </div>
  </div>
</template>

<script>
  // import Logo from '~/components/Logo.vue'

  export default {
    // components: {
    //   Logo
    // }
    data() {
      return {
        message: 'Fender',
        brand: 'gibson',

        counter: 0,
        seen: true
      }
    },
  }

</script>

