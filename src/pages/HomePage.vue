<template>
  <section>
    <h2>Select a Trading Timeframe</h2>
    <ul>
      <li>
        <h3>Day Trading</h3>
        <button @click="toChart('day')">Show Chart</button>
      </li>
      <li>
        <h3>Mid to Long Term Trading</h3>
        <button @click="toChart('long')">Show Chart</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    toChart(pathName) {
      this.$router.push(
        pathName === "day"
          ? "/day-trade"
          : pathName === "long"
          ? "/long-term-trade"
          : "/"
      );
    },
  },
};
</script>

<style scoped>
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>
