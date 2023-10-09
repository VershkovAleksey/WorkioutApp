<template>
    <div>
        <el-row>
            <el-col :span="24" class="team__menu">
                <h1>Our team</h1>
            </el-col>
        </el-row>
        <el-row class="team">
            <el-col :span="6">
                <img src="../../src/assets/images/jamies.png">
                <div  class="team__menu__forum">
                    <h2>jamies ford</h2>
                    <h3>Trainer</h3>
                    <p class="temo__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla,
                        lacus eget consequat </p>
                    <el-button class="temo__menu__buttom">SEE MORE</el-button>
                </div>

            </el-col>
            <el-col :span="6">
                <img src="../../src/assets/images/eddie.png">
                <div  class="team__menu__forum">
                    <h2>eddie smith</h2>
                    <h3>Trainer</h3>
                    <p class="temo__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla,
                        lacus eget consequat </p>
                    <el-button class="temo__menu__buttom">SEE MORE</el-button>
                </div>

            </el-col>
            <el-col :span="6">
                <img src="../../src/assets/images/annie.png">
                <div  class="team__menu__forum">
                    <h2>annie summer</h2>
                    <h3>Trainer</h3>
                    <p class="temo__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla,
                        lacus eget consequat </p>
                    <el-button class="temo__menu__buttom">SEE MORE</el-button>
                </div>

            </el-col>
            <el-col :span="6">
                <img src="../../src/assets/images/emily.png">
                <div  class="team__menu__forum">
                    <h2>emily sea</h2>
                    <h3>Trainer</h3>
                    <p class="temo__menu__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla,
                        lacus eget consequat </p>
                    <el-button class="temo__menu__buttom">SEE MORE</el-button>
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Team',
}
</script>

<style scoped>
.team {
    display: flex;
    justify-content: space-between;
}

.team__menu {
    margin-top: 157px;
}

h1 {
    color: #FFF;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 100px;
}

h1:hover {
    border-bottom: 3px solid #59253E;
    margin-bottom: 97px;
}

.team__menu__forum {
    background: #F2F2F2;
    padding: 0 12px 20px 12px;
}

h2,
h3 {
    margin: 0;
}

h2 {
    color: #0D0D0D;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
}

h3 {
    color: #332F3C;
    font-size: 13px;
    font-style: italic;
    font-weight: 600;
    text-transform: capitalize;
    padding: 0;
}

.temo__menu__item {
    color: rgba(13, 13, 13, 0.36);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    padding: 0 100px 27px 0;
}

.temo__menu__buttom {
    border-radius: 5px;
    background: #F24B88;
    color: white;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
    float: right;
}</style>