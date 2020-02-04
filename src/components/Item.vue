<template>
  <v-card class="margin-bottom padding-left">
    <v-row>
      <v-col class="d-flex align-center">
        <h3>{{name}}</h3>
      </v-col>
      <v-col class="d-flex align-center">
        <h3>{{trigger}}</h3>
      </v-col>
      <v-col>
        <div v-for="(option, index) in options" v-bind:key="option" :class="{ active: index === active}">
          <v-btn rounded class="margin index" @click="select(index)" :color="getColor(index)" dark>{{option}}</v-btn>
        </div>
      </v-col>
      <v-col class="d-flex align-center">
        <v-btn rounded color="#394e73" dark>Generate Email</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
  .margin {
    margin: 10px;
  }
  .margin-bottom {
    margin-bottom: 20px;
  }
  .padding-left {
    padding-left: 10%;
    padding-right: 10%;
  }
</style>

<script>
export default {
  name: 'Item',
  props: ["name", "trigger", "options"],
  data: () => ({
    active: null
  }),
  methods: {
    select(i) {
      this.active = i;
    },
    getColor(i) {
      if (this.active === i) {
        return "#394e73";
      }
      else {
        return "#5a79bc";
      }
    }
  },
};
</script>
