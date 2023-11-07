<template>
    <div>
        <el-row type="flex" justify="space-between" align="middle" v-for="(item, index) in getItemsForRow(characters)" :key="index">
            <el-col class="col__wrapper" v-for="(character, index) in item" :span="6" :offset="index > 0 ? 2 : 0">
                <el-card @click="logCharacters">
                    <img :src="character.image" alt="">
                    <div>
                        <h3>{{ character.name }}</h3>
                        <p>{{ character.location.name }}</p>
                        <p>{{ character.status }}</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <div class="tab__wrapper">
            <div class="pagination">
                <span class="demonstration">When you have more than 7 pages</span>
                <el-pagination @current-change="handleCurrentChange" :page-sizes="[10, 20, 30, 40, 50, 100]"
                    layout="prev, pager, next" :total="info.count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'RickAndMortyTable',
    props: ['data', 'info'],
    data() {
        return {
            characters: this.data,
            charactersForRow: [],
            charactersForCol: [],
            totalCount: this.data.length,
        }
    },
    methods: {
        logCharacters() {
            console.log(this.charactersForRow);
        },
        getItemsForRow(items) {
            for (let i = 0; i <= items.length; i++) {
                if (i % 3 == 0) {
                    this.charactersForRow.push(items.slice(i, i + 3));
                }
            }
            console.log(this.charactersForRow[0][0]);
            return this.charactersForRow;
        },
    },
}
</script>
<style scoped>
.col__wrapper {
    padding: 30px;
}

.tab__wrapper {
    display: flex;
    justify-content: center;
}
</style>