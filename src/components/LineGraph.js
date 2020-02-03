import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ["data", "options"],
  data: () => ({

  }),
  mounted () {
    this.renderChart(this.data, this.options)
  }
};
