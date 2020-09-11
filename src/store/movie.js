import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async searchMovies({ state, commit }) {
            // state.loading = true;
            commit('updateState', {
                loading: true
            })
            const res = await axios.get(
                `http://www.omdbapi.com/?apikey=5b48b817&s=${state.title}`
            );
            console.log(res.data);
            state.movies = res.data.Search
            commit('updateState', {
                loading: false
            })
        },
    }
}