<template>
    <el-row type="flex" justify="space-between" align="middle" v-for="item in getItemsForRow()" :key="item[0].id">
        <el-col class="col__wrapper" v-for="(character, index) in item" :span="6" :offset="index > 0 ? 2 : 0">
            <el-card @click="logCharacters">
                <img src="character.image" alt="" />
                <div>
                    <h1>{{ character.name }}</h1>
                    <p>{{ character.location.name }}</p>
                    <p>{{ character.status }}</p>
                </div>

            </el-card>
        </el-col>
    </el-row>

    <div class="tab__wrapper">
        <div class="pagination">When you have few pages</div>
        <span class="demonstration"></span>
        <el-pagination @curent-change="handleCurrentChange" :page-sizes="[10,20,3040,50,100]" layout="prev, pager, next" :total="info.count">
        </el-pagination>
    </div>
</template>

<script>

export default {
    name: 'RickAndMortyTable',
    props: ['data','info'],
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
            console.log(this.info)
        },
        getItemsForRow() {
            for (let i = 0; i <= this.characters.length; i++) {
                if (i % 3 == 0) {
                    this.charactersForRow.push(this.characters.slice(i , i + 3))
                }

            }
            console.log(this.charactersForRow)
            return this.charactersForRow
        },
        // loadPage(pageNumber){
        //     console.log(pageNumber);
        // }
        handleCurrentChange(val){
            this.axios.get(`https://rickandmortyapi.com/documentation/${val}`).then((response) => {
                this.characters = response.data.results;
                console.log(this.response.data);
            })

        }
    }
}
</script>
