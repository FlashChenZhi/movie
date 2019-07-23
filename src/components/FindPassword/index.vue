<template>
    <div class="password_body">
        <div class="password_email">
            邮箱：<input v-model="email" type="text" class="password_text">
            <button @click="handleToVerify">发送验证码</button>
        </div>
        <div>
            新密码：<input v-model="password"  type="password" class="password_text">
        </div>
        <div>
            验证码：<input v-model="verify"  type="text" class="password_text">
        </div>
        <div  class="password_btn">
            <button @click="handleToPassword">确认修改</button>
        </div>
        <div class="password_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/login">返回登录</router-link>
        </div>
    </div>
</template>

<script>
import {messageBox} from '@/components/JS'

export default {
    name:"findPassword",
    data(){
        return({
            email:'',
            password:'',
            verify:''
        });
    },
    methods:{
        handleToVerify(){
             this.axios.get('/api2/users/verify?email='+this.email).then((res) =>{
                var status = res.data.status;
                if(status === 200){
                    messageBox({
                        title:"验证码",
                        content:"验证码已发送",
                        ok:"确定"
                    });
                }else{
                    messageBox({
                        title:"验证码",
                        content:res.data.msg+"验证码发送失败",
                        ok:"确定"
                    });
                }
            });
        },
        handleToPassword(){
            this.axios.post('/api2/users/findPassword',{
                email: this.email,
                password: this.password,
                verify: this.verify,
            }).then((res) =>{
                var status = res.data.status;
                var This = this;
                if(status === 0){
                    messageBox({
                        title:'设置新密码',
                        content:'设置密码成功',
                        ok:'确定',
                        handleOk(){
                            This.$router.push('/mine/login');
                        }
                    });
                }else{
                     messageBox({
                        title:'设置新密码',
                        content:'设置失败！请重新设置',
                        ok:'确定'
                    });
                }
            })
        }
    }
}
</script>

<style scoped>
#content .password_body{
    width: 100%;
}
.password_body .password_text{
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
}
.password_body .password_email{
    position: relative;
}
.password_body .password_email button{
    position: absolute;
    right: 10px;
    top: 10px;
    height: 50px;
    border-radius: 3px;
    border: none;
    padding: 5px;
}
.password_body .password_btn{
    height: 50px;
    margin: 10px;
}
.password_body .password_btn button{
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
}
.password_body .password_link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}
.password_body .password_link a{
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>
