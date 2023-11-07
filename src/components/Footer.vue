<template>
    <div>
    <el-row class="footer">
<el-col :span="6">
        <div class="social__column" >
                <a><img src="@/assets/images/Logo.svg"></a>
                    <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum.</p>
                <div class="social_logo">
                    <a><img src="@/assets/images/Asset2.png" class="social__network"></a>
                    <a><img src="@/assets/images/Asset3.png" class="social__network"></a>
                    <a><img src="@/assets/images/Asset4.png" class="social__network"></a>
                    <a><img src="@/assets/images/Asset6.png" class="social__network"></a>
                </div>
        </div>
        </el-col>
        <el-col class="contacts" :span="6">
            <div class="contact__one">
                    <p class="text__caption">info</p>
                    <p class="text__contact">About</p>
                    <p class="text__contact">Careers</p>
                    <p class="text__contact">Press</p>
                    <p class="text__contact">Product Updates</p>
            </div>
        <!-- </el-col>
        <el-col class="column" :span="6"> -->
            <div class="contact__two">
                    <p class="text__caption">get in touch</p>
                    <p class="text__contact">About Us</p>
                    <p class="text__contact">Support</p>
                    <p class="text__contact">Contact Us</p>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="newsletter">
                    <p class="text__caption">subscribe to our newsletter</p>
                    <el-input v-model="input" placeholder="Type your email here" />
                    <el-button class="footer__subscribe" type="primary" @click="onSubmit">subscribe</el-button>
                </div>
        </el-col>

    </el-row>

    <el-row>
        <el-col class="copyright" >
            <div class="copy__right"> 
                <p class="text">Copyright</p>
                <p class="copy">&#169;</p>
                <p class="text">2021 Enisson Lemos | All right reserved</p>
            </div>
            <div  class="copy__left">
                <p class="text__cop">Terms & Conditions</p>
            </div> 
        </el-col>
    </el-row>
</div>
</template>

<script>
import { ref } from 'vue'
const input = ref('')

export default {
    name: "Footer",
}




const onSubmit = () => {
    console.log('submit!')
}
</script>

<style scoped>
* {
    background-color: #1f1c26;
    /* border: none;  */
}

/* .btn {
    outline: none;
} */

.contacts{
    display: flex;
}
.contact__one{
    display: flex;
    flex-direction: column;
    
}
.contact__two{
    display: flex;
    flex-direction: column;
    padding-left: 54px;
}
*:hover,
*:focus {
    background-color: #1f1c26;
}
.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item{
    padding: 0;
}
.social_logo {
    display: flex;
gap: 8px;
}

.copyright {
    display: flex;
    margin: 36.5px auto 15px auto;
}

.social__network {
    width: 39px;
    height: 39px;
}



.footer {
    display: flex;

    margin: 36.5px auto 15px auto;
    justify-content: space-between;
    /* border: none; */
}

.social__column {
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* border: none;  */
}

.text {
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
font-weight: 400;
line-height: normal;
word-wrap: break-word;
}

.text__caption {
    color: #FFF;
    font-family: Poppins;
    font-size: 18px;
    text-transform: uppercase;
}

.text__contact {
    color: #FFF;
    font-family: Poppins;
    font-size: 14px;
}

.newsletter{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.footer__subscribe {
    width: 98px;
    height: 36px;
    border-radius: 5px;
    background: #F24B88;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
}

.copy__right{
    display: flex;
    gap: 5px;
    justify-content: flex-start;
}
.copy__left{
    display: flex;
justify-content: flex-end;
margin-left: 723px;

}
.copy {
    color: #FFF;
    font-size: 12px;
}

.text__cop {
    color: #FFF;
    font-family: Poppins;
    font-size: 12px;
}
</style>
