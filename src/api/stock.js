import api from "@/api";

const methods = {
  async getStockPrice(params) {
    return api.post("/stockprice", params);
  },
};

export default methods;
