<template>
    <div>
        <el-menu mode="horizontal" class="menu" text-color="#f2f2f2">
            <el-menu-item>
                <router-link to="/">
                    <img src="@/assets/images/Logo.svg" class="logoHeader">
                </router-link>
            </el-menu-item>
            <div class="menu__items-right">
                <el-menu-item>
                    <p><router-link to="/" class="item__haeder">EXERCICES</router-link></p>
                </el-menu-item>
                <el-menu-item>
                    <p><router-link to="/community" class="item__haeder">COMMUNITY</router-link></p>
                </el-menu-item>
                <el-menu-item>
                    <p><router-link to="/pricing" class="item__haeder">PRICING</router-link></p>
                </el-menu-item>
                <el-menu-item>
                    <p> <router-link to="/about" class="item__haeder">ABOUT US</router-link></p>
                </el-menu-item>

                <el-menu-item class="autorize__buttons" @click="login">
                    <p class="login">Login</p>
                </el-menu-item>
                <el-menu-item class="autorize__buttons" @click="signIn">
                    <p class="signIn">Sign in</p>
                </el-menu-item>
            </div>
        </el-menu>

        <el-dialog class="registration__dialog" v-model="loginVisible" title="Registration" width="30%"
            :before-close="handleClose">
            <el-form label-width="100px" :model="registrationForm">
                <el-form-item class="form__label" label="First name">
                    <el-input v-model="registrationForm.firstName"></el-input>
                </el-form-item>
                <el-form-item class="form__label" label="Last name">
                    <el-input v-model="registrationForm.lastName"></el-input>
                </el-form-item>
                <el-form-item class="form__label" label="Birthdate">
                    <el-date-picker v-model="registrationForm.birthDate" type="date" placeholder="Choose your birth date">
                    </el-date-picker>
                </el-form-item>
                <el-form-item class="form__label" label="EMail">
                    <el-input v-model="registrationForm.Email"></el-input>
                </el-form-item>
                <el-form-item class="form__label" label="Password">
                    <el-input v-model="registrationForm.password"></el-input>
                </el-form-item>
            </el-form>
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
            signInVisible: false,
            registrationForm: {
                firstName: '',
                lastName: '',
                birthDate: '',
                Email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.loginVisible = true;
        },
        signIn() {
            this.signInVisible = true;
        }
    },
}
</script>

<style >
.menu {
    display: flex;
    justify-content: space-between;
    border: none;
    background-color: #1F1C26;
    align-items: center;
    color: #f2f2f2;
    --el-menu-item-height: auto;
}

.el-input__wrapper {
    background-color: #1F1C26;
}

.el-input__inner {
    color: #f2f2f2;
}

.el-dialog__title {
    color: #f2f2f2;
}

.registration__dialog {
    background-color: #332F3C;
    color: #f2f2f2;
}

.form__label {
    color: #f2f2f2;
}

a {
    text-decoration: none;
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
    align-items: center;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #1F1C26;
}

.menu__items-right .el-menu-item:hover {
    background-color: #1F1C26;
    border-bottom: 3px solid #59253E;
}

.el-menu--horizonta:hover,
.el-menu--horizonta:hover:focus {
    background-color: #1F1C26;
}

.item__haeder {
    color: #f2f2f2;
    text-transform: uppercase;
}

.login {
    background-color: #f24b88;
    color: #f2f2f2;
    text-transform: uppercase;
    padding: 2px 5px;
}

.signIn {
    color: #F2F2F2;
    border: 1px solid white;
    text-transform: uppercase;

}

.autorize__buttons {
    padding: auto auto;
    padding-right: 0;
    padding-left: 0;



}

.login:hover {
    background-color: #f24b88;
}</style>