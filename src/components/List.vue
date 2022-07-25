<template>
  <div class="product-list">
    <!-- отсутствует ключ :key для элементов списка -->
    <!-- (могут быть проблемы с перерисовкой, при изменении элементов массива) -->
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    // изменение ширины card можно решить более элегантным способом,
    // не задействуя js, через css: флексами и медиа запросами

    // в данном же случае cardsWidth никогда не обновляется,
    // т.к. нет реактивных свойств внутри метода, за которыми он будет следить;

    // необходимо создать в data свойство windowWidth
    // и вместо: let width = window.innerWidth;
    // указать: let width = this.windowWidth

    // также нужно повесить обработчик на событие onResize на window,
    // который будет обновлять значение ширины окна в реактивную переменную windowWidth
    // window.addEventListener("resize", this.onWindowResize)
    // и не забыть удалять обработчик в beforeDestroy
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      // сравнение числа со строкой (window.innerWidth > '840px')
      // должно быть (width > 840)
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) { // то же самое
        count = 2;
      }

      return 100 / count;
    },
  },
  methods: {
    startPricesMonitoring() {
      // setInterval - не очищается при размонтирования компонента
      // нужно завести свойство interval в data
      // this.interval = setInterval(...)
      // и не забыть удалить интервал в beforeDestroy
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch('getProductsList');

      this.products = data;
    },
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };

      // напрямую мутировать состояние из родителя в дочернем не стоит,
      // такой код приведет к путанице, лучше использовать события:
      // генерировать событие с помощью emits в текущем компоненте,
      // а прослушивать его в родительском,
      // там уже обработать используя метод добавления в корзину

      // либо организовать логику добавления в хранилище vuex и уже вызывать action
      this.$parent.cart.push(data);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
