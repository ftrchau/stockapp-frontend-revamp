<template>
  <h2>Day Trade</h2>
  <the-chart :ticker="ticker"></the-chart>
  <div ref="chart" :style="activeChart"></div>
</template>

<script>
import TheChart from "@/components/chart/TheChart.vue";

export default {
  components: {
    TheChart,
  },
  data() {
    return {
      ticker: "NVDA",
      activeChart: {
        height: "100%",
        width: "100%",
      },
    };
  },
};
</script>
