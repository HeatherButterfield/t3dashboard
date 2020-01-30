<template>
  <v-container>
    <div class="d-flex justify-center margin-bottom">
      <h1 class="margin-top">{{title}}</h1>
    </div>
    <v-row class="d-flex align-center">
      <v-col cols="6">
        <v-slider
          v-model="start"
          v-if="hasSlider"
          class="align-center"
          :tick-labels="labels"
          :step="step"
          :max="max"
          :min="min"
        >
        </v-slider>
      </v-col>
      <v-col cols="2">
        <v-btn color="cyan" dark v-if="hasSlider">Change Max</v-btn>
      </v-col>
      <v-col cols="2">
      </v-col>
      <v-col cols="2">
        <v-switch v-model="auto" :label="`Automatic Notifications`"></v-switch>
      </v-col>
    </v-row>
    <v-row class="padding-left margin-lr colored" v-if="!auto">
      <v-col class="d-flex align-center">
        <h2>Name</h2>
      </v-col>
      <v-col class="d-flex align-center">
        <h2>Event</h2>
      </v-col>
      <v-col class="d-flex align-center">
        <h2>Options</h2>
      </v-col>
      <v-col class="d-flex align-center">
      </v-col>
    </v-row>
    <div v-if="!auto">
      <div v-for="item in items" v-bind:key="item.name">
        <Item :name="item.name" :trigger="item.trigger" :options="item.options"/>
      </div>
    </div>
  </v-container>
</template>

<style>
  .margin-lr {
    margin-left: 0px;
    margin-right: 0px;
  }
  .margin-bottom {
    margin-bottom: 20px;
  }
  .margin-top {
    margin-top: 40px;
  }
  .padding-left {
    padding-left: 10%;
    padding-right: 10%;
  }
  .colored {
    background-color: #3F51B5;
    color: white;
  }
</style>

<script>
import Item from './Item';

export default {
  name: 'Section',
  components: {
    Item,
  },
  props: ["title", "items", "hasSlider", "min", "max", "start", "step", "labels"],
  data: () => ({
    auto: false
  }),
};
</script>
