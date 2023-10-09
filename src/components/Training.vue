<template>
    <div>
        <el-row>
            <el-col :span="24" class="training__menu">
                <h1>latest training</h1>
                <p class="training__menu__info">SEE MORE HERE</p>
            </el-col>
        </el-row>
        <el-row class="training__menu__forum">
            <el-col :span="8">
                <img src="../../src/assets/images/harold.png">
                <h2>running</h2>
                <p class="training__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat </p>
                <el-button class="training__menu__buttom">SEE MORE</el-button>
            </el-col>
            <el-col :span="8">
                <img src="../../src/assets/images/cathy.png">
                <h2>lifting</h2>
                <p class="training__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat </p>
                <el-button class="training__menu__buttom">SEE MORE</el-button>
            </el-col>
            <el-col :span="8">
                <img src="../../src/assets/images/bruce.png">
                <h2>yoga</h2>
                <p class="training__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat </p>
                <el-button class="training__menu__buttom">SEE MORE</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Training',
}
</script>

<style scoped>
h1 {
    color: #FFF;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
}

h1:hover {
    border-bottom: 3px solid #59253E;
}

.training__menu {
    display: flex;
    justify-content: space-between;
    margin-top: 148px;
}

.training__menu__info {
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
}

.training__menu__forum{
    display: flex;
    justify-content: space-between;
}

h2{
    color: #FFF;
font-size: 18px;
font-weight: 600;
text-transform: uppercase;
}

.training__menu__item{
    color: rgba(255, 255, 255, 0.36);
font-size: 14px;
font-weight: 400;
padding: 5px 100px 27px 0;
}

.training__menu__buttom{
    border-radius: 5px;
background: #F24B88;
width: 98px;
color: #FFF;
text-align: center;
font-size: 14px;
font-weight: 500;
border: none;
}
</style>