<template>
    <div>
        <p>{{ this.$store.state.count }}</p>
        <el-button @click="incrementCount">Увеличить</el-button>
        <el-button @click="decrementCount">Уменьшить</el-button>

        <div v-for="(item, index) in this.$store.state.prices" :key="index">
            <p>{{ item.id }}   {{ item.coach }}  {{ item.price }}</p>
        </div>
    </div>
</template>
<script>

import { mapMutations } from 'vuex'

export default {
    name: 'Community',
    components: {
    },

    data() {
        return {

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
    }
}
</script>