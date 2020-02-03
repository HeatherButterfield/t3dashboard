import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  props: ["data", "options"],
  data: () => ({

  }),
  mounted () {
    this.renderChart(this.data, this.options)
  }
};
