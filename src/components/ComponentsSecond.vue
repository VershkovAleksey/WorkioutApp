<template>
    <div>
        <ul>
            <li v-for="item in tableData" :key="item.id">{{ item.name }}</li>
        </ul>>
    </div>>
</template>
<script>
import Table from '@/components/Table.vue';
export default{
    name:'Second',
    components:{
        Table
    },

data() {
    return {
        tableData: [
        {
                id: 1,
                name: 'Пилатес',
                trainer: 'Семенорв Семен',
                duration: 60,
            },
            {
                id: 2,
                name: 'Йога',
                trainer: 'Данилин Данил',
                duration: 60,
            },
            {
                id: 3,
                name: 'Фитнес',
                trainer: 'Кириллов Кирилл',
                duration: 60,
            },
            {
                id: 4,
                name: 'Карате',
                trainer: 'Петров Петр',
                duration: 60,
            },
            {
                id: 5,
                name: 'Бокс',
                trainer: 'Максимов Андрей',
                duration: 60,
            },
            {
                id: 6,
                name: 'Плавание',
                trainer: 'Андреева Ангелина',
                duration: 60,
            },
            {
                id: 7,
                name: 'Танцы',
                trainer: 'Чермакова Александра',
                duration: 60,
            },
            {
                id: 8,
                name: 'Армреслинг',
                trainer: 'Александров Максим',
                duration: 60,
            },
        ]
    }
}
}
</script>