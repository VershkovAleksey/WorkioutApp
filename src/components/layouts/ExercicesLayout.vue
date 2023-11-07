<template>
    <div>
        <div class="exercices__wrapper">
            <Promo>
            </Promo>
        </div>
    </div>
</template>

<script>
import Promo from '../ExercicesComponents/Promo.vue'

export default {
    name: 'Exercices',
    components: {
        Promo
    },
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>
<style>
.exercices__wrapper {
    margin: 60px auto 150px auto;
}
</style>