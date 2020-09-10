<template>
  <div>
    <v-text-field v-model="title" outlined @keypress.enter="searchMovies">
      <template v-slot:prepend-inner>
        <v-icon>search</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular v-if="loading" size="24" color="primary" indeterminate />
      </template>
    </v-text-field>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      loading: false,
    };
  },
  methods: {
    searchMovies() {
      axios
        .get(`http://www.omdbapi.com/?apikey=5b48b817&s=${this.title}`)
        .then((res) => {
          console.log(res);
        });
      console.log("search!");
    },
  },
};
</script>