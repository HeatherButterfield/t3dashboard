<template>
  <v-container>
    <h1 class="text-center margin-top">Individual Data</h1>

    <h1 class="text-center margin-top">Notifications</h1>
  </v-container>
</template>

<style>
  .margin-top {
    margin-top: 40px;
  }
</style>

<script>

export default {
  name: 'GraphsIndividual',
  components: {

  },
  props: ["people", "events"],
  data: () => ({
    graphs: [
      {
        type: "",
        data: "",
        options: ""
      }
    ]
  }),
};
</script>
