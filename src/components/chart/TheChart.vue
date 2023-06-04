<template>
  <div>Chart here</div>
</template>

<script>
import Anychart from "anychart";
import stockApi from "@/api/stock";
import moment from "moment";

export default {
  props: ["ticker"],
  data() {
    return {
      chart: null,
      table: null,
      startDate: moment().subtract(21, "month").format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      stockData: [],
      stockInterval: "1d",
    };
  },
  methods: {
    init() {
      this.chart = new Anychart.stock();
      this.chart.grouping().enabled(false);

      this.table = Anychart.data.table(0);
      this.table.addData(this.stockData);
    },
    async getStock() {
      const result = stockApi.getStockPrice({
        ticker: this.ticker,
        startDate: this.startDate,
        // endDate: moment(this.endDate).format("YYYY-MM-DD"),
        endDate: this.endDate,
        interval: this.stockInterval,
      });

      console.log(result);
    },
  },
  async mounted() {
    await this.getStock();
  },
};
</script>

<style scoped></style>
