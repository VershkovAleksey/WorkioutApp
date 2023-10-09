<template>
    <div>
        <el-table :data="schdule" style="width: 100%;">
            <el-table-column prop="id" label="№" width="180"></el-table-column>
            <el-table-column prop="name" label="Название" width="180"></el-table-column>
            <el-table-column prop="trainer" label="Тренер"></el-table-column>
            <el-table-column prop="duration" label="Продолжительность"></el-table-column>
        </el-table>
        
        <el-button text @click="dialogVisible = true">Добавить </el-button>
        <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
            <span>Заполните форму</span>
            <el-form :label-position="labelPosition" label-width="100px" :model="tableData" style="max-width: 460px">
                <el-form-item label="№">
                    <el-input v-model="tableData.id" />
                </el-form-item>
                <el-form-item label="Наименование">
                    <el-input v-model="tableData.name" />
                </el-form-item>
                <el-form-item label="Тренер">
                    <el-input v-model="tableData.trainer" />
                </el-form-item>
                <el-form-item label="Продолжительность">
                    <el-input v-model="tableData.duration" />
                </el-form-item>
            </el-form>
            <el-button v-on:click="this.$emit('addElement',tableItem)" class="table_button" type="success">Добавить</el-button>
        <el-button @click="this.$emit('deleteElement(scope.$index, scope.row)')" class="table_button" type="danger">Удалить</el-button>
        <el-button @click="dialogVisible = false">Отмена</el-button>
        <el-button type="primary" @click="dialogVisible = false">Подтвердить</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: ['schdule'],
    data(){
        return{
            tableItem:{
                id:0,
                name:'',
                trainer:'',
                duration:0
            }
        }
    }
}
</script>

<style scoped>
.el-table tr {
    background-color: #1f1c26;
    color: #f2f2f2;
}

.el-table th.el-table__cell {
    background-color: #1f1c26;
    color: #f2f2f2;
}

.table_button {
    margin-top: 30px;
}
</style>