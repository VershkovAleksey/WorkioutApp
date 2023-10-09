<template>
    <h1>Таблица</h1>
    <Table v-bind:schdule="tableData"></Table>
</template>

<script>

import Table from '@/components/Table.vue';
export default {
    name: 'First',
    components: {
        Table
    }
    ,

    data() {
        return {
            tableData: [
                {
                    id: 1,
                    name: 'Фитнес',
                    trainer: 'Семенов Иван',
                    duration: 45,
                },
                {
                    id: 2,
                    name: 'Йога',
                    trainer: 'Иванов Сергей',
                    duration: 45,
                },
                {
                    id: 3,
                    name: 'Пилатес',
                    trainer: 'Сергеев Александр',
                    duration: 45,
                },
                {
                    id: 4,
                    name: 'Карате',
                    trainer: 'Александров Семен',
                    duration: 45,
                },
            ]
        }
    },
    methods:{
        AddElement(item){
            this.tableData.push(item)
        },
        deleteItem(){
            this.$emit("deleteElement",item)
        }
    }
}
</script>