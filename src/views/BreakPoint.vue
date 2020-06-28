<template>
  <div id="breakpoint">
    <v-container>
      <h1>Break Point</h1>
      <v-btn color="success" class="ma-4 hidden-md-and-up">Success Show in sm</v-btn>
      <br>
      <v-btn color="success" class="ma-4 hidden-md-only">Hidden only md</v-btn>
      <br>
      <v-btn color="success" class="ma-4 hidden-md-and-down">Hidden when sm</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
