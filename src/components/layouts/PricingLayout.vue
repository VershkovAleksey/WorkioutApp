<template>
    <div>
        <p>{{ this.$store.state.count }}</p>
        <el-button @click="incrementCount">Увеличить</el-button>
        <el-button @click="decrementCount">Уменьшить</el-button>
        <rickAndMortyTable :info="this.info" :data="characters" />
    </div>
</template>
<script>
import rickAndMortyTable from '../RickAndMorty/RickAndMortyTable.vue'
import { mapMutations } from 'vuex'

export default {
    name: "Pricing",
    components: {
        rickAndMortyTable
    },
    data() {
        return {
            characters: [],
            info: null
        }
    },
    methods: {
        ...mapMutations([
            'increment', 'decrement'
        ]),
        incrementCount() {
            this.increment();
        },
        decrementCount() {
            this.$store.commit("decrement");
        },
        call() {
            this.axios.get("https://rickandmortyapi.com/api/character/?page=${}").then((response) => {
                this.characters = response.data.results;
                this.info = response.data.info;

            })
        }
    },
    created() {
        this.call();
    },
}
</script>