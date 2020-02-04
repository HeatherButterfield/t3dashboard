<template>
  <v-container>
    <h1 class="text-center margin-top margin-bottom">Individual Data</h1>
    <div class="d-flex justify-space-around">
      <v-card class="graph" width="400px">
        <PieGraph :data="g1.data" :options="g1.options"/>
      </v-card>
    </div>
    <h1 class="text-center margin-top">Notifications</h1>
  </v-container>
</template>

<style>
  .margin-top {
    margin-top: 40px;
  }
  .margin-bottom {
    margin-bottom: 40px;
  }
</style>

<script>
import PieGraph from './PieGraph.js';

export default {
  name: 'GraphsIndividual',
  components: {
    PieGraph
  },
  props: ["people", "events"],
  data: () => ({
    g1: {
      data: {
        datasets: [{
          data: [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
          ],
          backgroundColor: [
            "#0094d5",
            "#efb423",
          ],
          label: 'Client Name'
        }],
        labels: [
          'Income',
          'Expenses'
        ]
      },
      options: {
        responsive: true
      }
    }
  }),
};
</script>
