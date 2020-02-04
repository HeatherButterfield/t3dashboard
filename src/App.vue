<template>
  <v-app>
    <div class="background">
      <GraphsAll :colors="colors"/>
      <GraphsIndividual/>
      <div v-for="section in sections" v-bind:key="section.title">
        <Section :title="section.title" :about="section.about" :items="section.items" :hasSlider="section.hasSlider" :min="section.min" :max="section.max" :start="section.start" :step="section.step" :labels="section.labels"/>
      </div>
    </div>
  </v-app>
</template>

<style>
  .background {
    background-color: #f9f7f7;
  }
  * {
    font-family: 'Lato', sans-serif;
    font-weight: "400px";
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    font-weight: "900px";
  }
</style>

<script>
import Section from './components/Section';
import GraphsAll from './components/GraphsAll';
import GraphsIndividual from './components/GraphsIndividual';

export default {
  name: 'App',
  components: {
    Section,
    GraphsAll,
    GraphsIndividual
  },
  data: () => ({
    colors: {
      blue: "#0094d5",
      darkBlue: "#394e73",
      lightBlue: "#5a79bc",
      aqua: "#b1d3d5",
      orange: "#ed6622",
      yellow: "#efb423",
      green: "#acd13a",
      purple: "#67235f"
    },
    sections: [
      {
        title: 'Cash Increase',
        about: 'If cash balance is over a certain amount, notify client',
        hasSlider: true,
        min: 0,
        max: 50000,
        start: 20000,
        step: 10000,
        labels: ["$0","$10000", "$20000", "$30000", "$40000", "$50000"],
        items: [
          {
            name: 'Heather',
            trigger: "Increase in cash",
            options: ["Option 1", "Option 2", "Option 3"],
          },
          {
            name: 'John',
            trigger: "Increase in cash",
            options: ["Option 1", "Other"]
          }
        ]
      },
      {
        title: 'Cash Decrease',
        hasSlider: true,
        min: 0,
        max: 50000,
        start: 20000,
        step: 10000,
        labels: ["$0","$10000", "$20000", "$30000", "$40000", "$50000"],
        items: [
          {
            name: 'Heather',
            trigger: "Increase in cash",
            options: ["Option 1", "Option 2", "Option 3"],
          },
          {
            name: 'John',
            trigger: "Increase in cash",
            options: ["Option 1", "Other"]
          }
        ]
      },
      {
        title: 'Family',
        items: [
          {
            name: 'Matt',
            trigger: "Change in family",
            options: ["Option 1", "Option 2"]
          },
          {
            name: 'Joey',
            trigger: "Change in family",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"]
          }
        ]
      }
    ],
  }),
};
</script>
