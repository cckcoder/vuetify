<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div @click="$router.push('/')" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn outlined
        @click="$router.push('/about')"
        target="_blank"
        text
        class="mr-3">
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn
        outlined
        @click="$router.push('/grid')"
        target="_blank"
        text>
        <span class="mr-2">Grid</span>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    //HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
