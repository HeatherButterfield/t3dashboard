<template>
  <v-container>
    <h1 class="text-center margin-top margin-bottom">Overall Data</h1>
    <div class="d-flex justify-space-around">
      <v-card class="graph" width="400px">
        <ScatterGraph :data="g1.data" :options="g1.options"/>
      </v-card>
      <v-card class="graph" width="400px">
        <LineGraph :data="g2.data" :options="g2.options"/>
      </v-card>
    </div>
  </v-container>
</template>

<style>
  .margin-top {
    margin-top: 40px;
  }
  .margin-bottom {
    margin-bottom: 40px;
  }
  .graph {
    padding: 20px;
  }
</style>

<script>
import ScatterGraph from './ScatterGraph.js';
import LineGraph from './LineGraph.js';

export default {
  name: 'GraphsAll',
  components: {
    ScatterGraph,
    LineGraph
  },
  props: ["people", "events", "colors"],
  data: () => ({
    g1: {
      data: {
          datasets: [{
              label: "All Clients",
              backgroundColor: "#0094d5",
              data: [
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
                {
                    x: Math.floor(Math.random() * 50),
                    y: Math.floor(Math.random() * 50)
                },
              ]
          }]
      },
      options: {
				title: {
					display: true,
					text: 'Age vs. Risk Tolerance'
        }
      }
    },
    g2: {
      data: {
        labels: ["January","February","March","April","May","June","July"],
        datasets: [
          {
            label: "All Clients",
            data: [65,59,80,81,56,55,40],
            fill: false,
            borderColor: "#0094d5",
            lineTension: 0.1,
          }
        ]
      },
      options: {
				title: {
					display: true,
					text: 'Logins per Month'
        }
      }
    }
  }),
  methods: {
    randomColor() {
      this.colors[Math.floor(Math.random() * 5)]
    }
  }
};
</script>
