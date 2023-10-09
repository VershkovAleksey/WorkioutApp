<template>
    <div>

        <RickAndMortyTable :info="this.info" :data="çharacters"></RickAndMortyTable>
    </div>
    <div>
        <div v-for="item in characters" :key="item.id">
            <h1>{{ item.name }}</h1>
            <img :src="item.image" :alt="ïtem.name">
            <p>characters {{ item.name }} located in {{ location.name }} with status {{ item.status }}</p>
        </div>

    </div>
</template>

<script>
import RickAndMortyTable from 'D:/full-stack/figma/src/components/RickAndMorty/RickAndMortyTable.vue'
export default {
    name: 'Pricing',
    components: {
        RickAndMortyTable
    }, data() {
        return {
            characters: [],
            info:null
        }
    },
    methods: {
        call() {
            this.axios.get('https://rickandmortyapi.com/documentation/').then((response) => {
                this.characters = response.data.results;
                this.info=response.data.info;
            })
        }
    },
    created() {
        this.call();
    }
}
</script>
