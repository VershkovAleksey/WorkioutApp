<template>
    <div class="potencial__object">
        <h1>DISCOVER YOUR POTENCIAL</h1>
        <p class="potencial__object__item">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. text of the printing and
            typesetting</p>

        <div class="potencial__object__button">
            <el-button class="button__text">VIEW PLANS</el-button>
            <el-button class="button__text">LEARN MORE</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Potencial',
}
</script>

<style scoped>
.potencial__object {
    background: #332F3C;
    margin-bottom: 57px;
    margin-top: 150px;
}

h1{
    color: #FFF;
text-align: center;
font-size: 48px;
font-weight: 600;
letter-spacing: 10.32px;
padding-top: 66px;
padding-bottom: 0;
}

.potencial__object__item{
    color: #FFF;
text-align: center;
font-size: 13px;
font-weight: 400;
padding-top: 0;
padding-bottom: 45px;
}

.potencial__object__button{
    display: flex;
    justify-content: center;
    padding-bottom: 65px;
    gap: 30px;
}

.button__text{
    border-radius: 10px;
background: #1F1C26;
color: #FFF;
font-size: 20px;
font-weight: 600;
height: 70px;
border: 0;
}

.button__text:hover{
background: #F24B88;
color: #FFF;
border: 0;
}
</style>