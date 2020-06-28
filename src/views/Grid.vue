<template>
  <div id="grid">
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="6" md="4">
          <v-btn block color="primary">1</v-btn>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn block color="error">2</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn block color="success">3</v-btn>
        </v-col>
      </v-row>
      <!-- flex demo -->
      <v-row no-gutters class="justify-center align-content-center" style="height: 200px; background-color:tomato;">
        <v-col cols="2">
          <v-btn block>Flex 1</v-btn>
        </v-col>

        <v-col cols="2">
          <v-btn block>Flex 2</v-btn>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
