<template>
    <div>
        <el-menu mode="horizontal" class="menu" text-color="#f2f2f2">
            <el-menu-item>
                <router-link to="/">
                    <p>
                        <img src="@/assets/images/Logo.svg" class="logoHeader">
                    </p>
                </router-link>
            </el-menu-item>
            <div class="menu__items-right">
                <el-menu-item>
                    <p>
                        <router-link to="/" class="item__haeder">EXERCICES</router-link>
                    </p>
                </el-menu-item>
                <el-menu-item>
                    <p><router-link to="/two" class="item__haeder">COMMUNITY</router-link></p>
                </el-menu-item>
                <el-menu-item>
                    <p><router-link to="/three" class="item__haeder">PRICING</router-link></p>
                </el-menu-item>
                <el-menu-item>
                    <p><router-link to="/four" class="item__haeder">ABOUT US</router-link></p>
                </el-menu-item>

                <el-menu-item class="author_button" @click="login">
                    <p class="login">LOGIN</p>
                </el-menu-item>
                <el-menu-item  class="author_button" @click="signIn">
                    <p class="signIn">SIGN IN</p>
                </el-menu-item>
            </div>
        </el-menu>

        <el-dialog v-model="loginVisible" title="Зарегистрироватся" width="30%" :before-close="handleClose">
            <!-- <span>This is a message</span> -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="loginVisible = false">Отмена</el-button>
                <el-button type="primary" @click="loginVisible = false">Подтвердить</el-button>
            </span>
        </el-dialog>
        <el-dialog v-model="signInVisible" title="Войти" width="30%" :before-close="handleClose">
            <!-- <span>This is a message</span> -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="signInVisible = false">Отмена</el-button>
                <el-button type="primary" @click="signInVisible = false">Подтвердить</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            loginVisible: false,
            signInVisible: false
        }
    },
    methods: {
        login() {
            this.loginVisible = true;
        },
        signIn() {
            this.signInVisible = true;
        }
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: #1F1C26;
    align-items: center;
    color: #f2f2f2;
    margin-bottom: 61px;
}

.el-menu--horizontal.el-menu {
    border-bottom: none;
}

.el-menu--horizontal>.el-menu-item {
    padding: 0;
}

.menu__items-right {
    display: flex;
    justify-content: space-between;
    color: #f2f2f2;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #1F1C26;
}

.menu__items-right .el-menu-item .item__haeder:hover {
    background-color: #1F1C26;
    border-bottom: 3px solid #59253E;
}

.el-menu--horizonta:hover,
.el-menu--horizonta:hover:focus {
    background-color: #1F1C26;
}
.author_button{
    padding: auto auto;
    padding-left: 0;
    padding-right: 0;
}
.item__haeder {
    color: #f2f2f2;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
}

.login {
    background-color: #f24b88;
    border: 1px solid #f24b88;
    color: #f2f2f2;
    font-size: 14px;
    text-align: center;
    margin: 0;
    padding: 0 7px;
}

.signIn {
    color: #F2F2F2;
    border: 1px solid white;
    font-size: 14px;
    text-align: center;
    margin: 0;
    padding: 0 7px;
    
}

.el-menu-item {
    line-height:21px;
}
.login:hover {
    background-color: #f24b88;
}
</style>