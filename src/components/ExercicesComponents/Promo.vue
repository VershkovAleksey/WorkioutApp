<template>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="10" >
            <h1>4 week</h1>
            <h2>workout plan</h2>
            <p class="promo__text text__wrapper">
                <slot>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita laborum ipsa labore quis
                    dolorum est optio mollitia voluptatem. Voluptas repellat commodi suscipit incidunt excepturi unde,
                    dolores ab assumenda sunt?</slot>
            </p>
            <div class="prom__buttons__wrapper">
                <el-button size="medium" class="promo__try__button">Try for free</el-button>
                <el-button size="medium" class="promo__try__button">Try for free</el-button>
            </div>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="6" class="col__wrapper">
            <div class="promo__image">
            </div>
        </el-col>
        <el-col :span="6" class="promo__tabs">
            <div class="promo__tabs__item">
                <h3>Get inspired</h3>
                <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget
                    consequat
                    tincidunt, lectus ex.
                </p>
                <a class="promo__tabs__link" href="#">
                    <div class="promo__tabs__link__arrow"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.464871 9.47451C0.169327 9.76473 0.169327 10.2353 0.464871 10.5255C0.760415 10.8157 1.23959 10.8157 1.53513 10.5255L0.464871 9.47451ZM10.9492 0.97324C10.9492 0.562809 10.6104 0.230089 10.1924 0.230089L3.38131 0.230089C2.96334 0.230089 2.62452 0.562809 2.62452 0.97324C2.62452 1.38367 2.96334 1.71639 3.38131 1.71639H9.4356V7.6616C9.4356 8.07203 9.77443 8.40475 10.1924 8.40475C10.6104 8.40475 10.9492 8.07203 10.9492 7.6616L10.9492 0.97324ZM1.53513 10.5255L10.7275 1.49873L9.65726 0.447753L0.464871 9.47451L1.53513 10.5255Z"
                                fill="#F2F2F2" />
                        </svg>
                    </div>Explore more
                </a>
            </div>
            <div class="promo__tabs__item">
                <h3>Challenge yourself</h3>
                <p class="promo__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringil. lacus eget
                    consequat
                    tincidunt, lectus ex.</p>
                <a class="promo__tabs__link" href="#">
                    <div class="promo__tabs__link__arrow"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.464871 9.47451C0.169327 9.76473 0.169327 10.2353 0.464871 10.5255C0.760415 10.8157 1.23959 10.8157 1.53513 10.5255L0.464871 9.47451ZM10.9492 0.97324C10.9492 0.562809 10.6104 0.230089 10.1924 0.230089L3.38131 0.230089C2.96334 0.230089 2.62452 0.562809 2.62452 0.97324C2.62452 1.38367 2.96334 1.71639 3.38131 1.71639H9.4356V7.6616C9.4356 8.07203 9.77443 8.40475 10.1924 8.40475C10.6104 8.40475 10.9492 8.07203 10.9492 7.6616L10.9492 0.97324ZM1.53513 10.5255L10.7275 1.49873L9.65726 0.447753L0.464871 9.47451L1.53513 10.5255Z"
                                fill="#F2F2F2" />
                        </svg>
                    </div>Explore more
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
h1,
h2,
h3 {
    text-transform: uppercase;
    margin: 0px auto -20px auto;
}

h1 {
    font-size: 64px;
    font-weight: 700;
}

h2 {
    font-size: 29px;
    font-weight: 500;
}

h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 14px;
}

.promo__try__button {
    background-color: #EC3779;
    border: none;
    color: White;
    font-size: 20px;
    font-weight: 500;
    padding: 20px 30px;
    text-transform: uppercase;
    border-radius: 10px;
    line-height: 30px;
}
.promo__try__button:hover {
    background-color: #F24B88;
}

.prom__buttons__wrapper {
    margin-top: 110px;
    display: flex;
    justify-content: space-between;
}
.el-button {
    height: auto;
}
.text__wrapper{
    margin-top:65px;
}
.promo__text {
    font-family: Poppins;
    color: rgba(255, 255, 255, 0.36);
    font-size: 14px;
}

.promo__image {
    border-radius: 20px;
    -webkit-border-radius: 20px;
    width: 305px;
    height: 425px;
    background-image: url('../../assets/images/womanNearGrif.jpg');
}

.promo__tabs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.promo__tabs__item {
    background-color: #332F3C;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
}
.promo__tabs__item:last-child{
    margin-bottom: 0;
}
.promo__tabs__link {
    display: flex;
    font-size: 18px;
    color: white;
    text-decoration: none;
    align-items: center;
}

.promo__tabs__link__arrow {
    background-color: #F24B88;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 13px;
}</style>