<template>
  <v-container>
    <h1 class="text-center margin-top margin-bottom">Individual Data</h1>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-select
          v-model="select"
          :items="names"
          label="Client"
        ></v-select>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
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
  .select {
    width: 300px;
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
    names: ["Heather", "Jameson", "Dominic", "Jaxon"],
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
