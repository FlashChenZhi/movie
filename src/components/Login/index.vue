<template>
    <div class="login_body">
        <div >
            <input v-model="username" class="login_text" type="text" placeholder="请输入你的用户名">
        </div>
        <div>
            <input v-model="password" class="login_text" type="password" placeholder="请输入你的密码">
        </div>
        <div>
           <input type="text" v-model="verifyImg" class="login_text"  placeholder="请输入你的验证码">
           <img src="/api2/users/verifyImg" @click="handleToVerifyImg">
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @click="handleToLogin">
        </div>
        <div class="login_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findPassword">忘记密码？</router-link>
        </div>
    </div>
</template>

<script>
import { messageBox } from '@/components/JS'
export default {
    name:'Login',
    data(){
        return {
            username:'',
            password:'',
            verifyImg:''
        }
    },
    methods:{
        handleToLogin(){
            this.axios.post('/api2/users/login',{
                username: this.username,
                password: this.password,
                verifyImg: this.verifyImg
            }).then((res)=>{
                var status = res.data.status;
                var  This  = this;
                if(status === 0){
                    messageBox({
                        title:'登录',
                        content:'登陆成功',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/center');
                        }
                    });
                }else{
                    messageBox({
                        title:'登录',
                        content:res.data.msg,
                        ok:'确定'
                    });
                }
            });
        },
        handleToVerifyImg(ev){
            ev.target.src = '/api2/users/verifyImg?'+Math.random()
        }
    }
}
</script>

<style scoped>
#content .login_body{
    width: 100%;
}
.login_body .login_text{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
}
.login_body .login_btn{
    height: 50px;
    margin: 10px;
}
.login_body .login_btn input{
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
}
.login_body .login_link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}
.login_body .login_link a{
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>
