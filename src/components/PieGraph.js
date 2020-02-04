import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ["data", "options"],
  data: () => ({

  }),
  mounted () {
    this.renderChart(this.data, this.options)
  }
};
