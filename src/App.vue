<template>
  <v-app>
    <div class="background">
      <GraphsAll/>
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
