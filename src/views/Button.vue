<template>
  <div id="button">
    <v-container>
    <h1>Button</h1>
      <v-btn class="pink white--text mr-3">RUN</v-btn>
      <v-btn
        depressed
        small
        fab
        class="pink white--text mr-3">RUN</v-btn>
      <v-btn outlined color="blue" class="mr-3">RUN</v-btn>
      <v-icon size="50" color="pink">face</v-icon>

      <v-btn class="mr-3" color="green white--text">
        click
        <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
      </v-btn>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style>

</style>
