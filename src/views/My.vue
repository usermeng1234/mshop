<template>
    <div>
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field label="用户名" required placeholder="请输入用户名" v-model="loginUsername"></van-field>
                    <van-field label="密码" type="password" required placeholder="请输入密码" v-model="loginPassword" ></van-field>
                </van-cell-group>

                <div>
                    <van-button @click="registerHander" type="primary" size="large">登录</van-button>
                </div>
            </van-tab>

            <van-tab title="注册">
                <van-cell-group>
                    <van-field label="用户名" required placeholder="请输入用户名" v-model="registerUsername" ></van-field>
                    <van-field label="密码" type="password" required placeholder="请输入密码" v-model="registerPassword" ></van-field>
                </van-cell-group>

                <div>
                    <van-button type="primary" size="large">注册</van-button>
                </div>
            </van-tab>

        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'
    export default {
    data(){
        return{
            loginUsername:'',
            loginPassword:'',
            registerUsername:'',
            registerPassword:''
        }
    },
    methods:{
        registerHander(){
            axios({
                url:url.registUser,
                method:'post',
                data:{
                    userName:this.registerUsername,
                    password:this.registerPassword
                }
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            });
        }
    }
    }
</script>
<style lang="scss">

</style>