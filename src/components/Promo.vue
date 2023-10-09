<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="8">
            <h1>4 WEEK</h1>
            <h2>Workout Plan</h2>
            <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget
                consequat tincidunt,
                lectus ex bibendum libero, eget iaculis quam arcu quis mauris. Donec ex neque, egestas in faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
            <div class="prom_button__wrapper">
                <el-button size="medium" class="prom_try_button">TRY FOR FREE</el-button>
                <el-button size="medium" class="prom_try_button">TRY FOR FREE</el-button>
            </div>
        </el-col>

        <!-- <el-col :span="2"></el-col> -->
        <el-col :span="8" class="promo__woman"><img   src="../../src/assets/images/jawfox.jpg" alt="Woman spotrt"></el-col>
        <!-- <el-col :span="1"></el-col> -->
        <el-col :span="8" class="promo__tabs">
            <div class="promo__tabs__item">
                <h3>GET INSPIRED</h3>
                <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.</p>
                <a href="#" class="promo__tabs__link">
                    <div><img src="../../src/assets/images/Group3.png"></div>
                    <p style="padding-left: 8px;">Explore More</p>
                </a>
            </div>
            <div class="promo__tabs__item">
                <h3>CHALLENGE YOURSELF</h3>
                <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget consequat tincidunt, lectus ex.</p>
                <a href="#" class="promo__tabs__link">
                    <div><img src="../../src/assets/images/Group3.png"></div>
                    <p style="padding-left: 8px;">Explore More</p>
                </a>
            </div>
        </el-col>
    </el-row>
</template>
    
<script>
export default {
    name: 'Promo',
}
</script>
    
<style scoped>
h1,h2{
    text-transform: uppercase;
    margin: 0 auto -20px auto; 
    
}

h1{
    text-transform: uppercase;
    font-size: 520%;
    font-weight: 700;
}
h2{
    font-size: 250%;
    font-weight: 500;
    margin-bottom: 65px;
}

h3{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 14px;
    padding: 0;
}
.prom_try_button {
    background-color: #F24B88;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 20px 30px;
    text-transform: uppercase;
    border-radius: 10px;
    line-height: 30px;
}

.prom_try_button:hover{
    background-color: #F24B88;
}
.prom_button__wrapper {
    margin-top: 110px;
    display: flex;
    justify-content: space-between;
}

.el-button {
    height: auto;
}

.promo__text {
    color: rgba(255, 255, 255, 0.36);
    font-size: 14px;
}

.promo__woman{
    border-radius: 50px;
    transform: scale(1.1);
    margin-top: 25px; 
    text-align: center;
}

.promo__tabs__item{
    border-radius: 10px;
background: #332F3C;
 margin: 10px; 
padding: 26px;
}

.promo__tabs__link{
    display: flex;
    font-size: 18px;
    color: white;
    text-decoration: none;
    align-items: center;
    text-align: center;
    /* padding: 10px; */
}
.promo__tabs__link__arrow{
    background-color: #F24B88;
    /* border-radius: 50%; */
    padding: 15px;
    width: 40px;
/* height: 40px; */
    /* display: flex; */
}
</style>