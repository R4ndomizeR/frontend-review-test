<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header>
    <List :currency="currency"/>
    <Cart :cart="cart"/>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  data() {
    return {
      // Можно вынести состояние корзины и валюты во vuex
      // и получать доступ в дочерних компонентах уже через хранилище, а не через props,
      // чтобы вынести повторяющуюся логику управления состоянием и само состояние в одно место.
      // Либо использовать provide, inject
      // Такой подход удобен при глубокой вложенности компонентов.
      cart: [],
      currency: 'VGTB',
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
