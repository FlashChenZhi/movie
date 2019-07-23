<template>
    <div>
        <div>个人中心</div>
        <div>当前用户：{{$store.state.user.name}}
            <a href="javascript:;" @click="handleToLogout">退出</a>
        </div>
        <div v-if="$store.state.user.isAdmin">  当前身份：管理员 <a href="/admin" target="_blank">进入管理后台</a>   </div>
        <div v-else>  当前身份：普通会员  </div>
        <div>
            <input type="file" name="file" value="上传头像" @change="handleToUpload">
            <img :src="$store.state.user.userHead" class="userHead">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {messageBox} from '@/components/JS'
export default {
    name:"Center",
    methods:{
        handleToLogout(){
            this.axios.get('/api2/users/logout').then((res)=>{
                var status = res.data.status;
                if(status === 0){
                    localStorage.removeItem('name');
                    localStorage.removeItem('isAdmin');
                    this.$store.commit('user/USER_NAME',{ name: '' , isAdmin: false , userHead: '' })
                    this.$router.push('/mine/login')
                }
            });
        },
        handleToUpload(ev){
            var file  = ev.target.files[0];
            var param = new FormData();
            var config = {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            };
            param.append('file', file, file.name);
            this.axios.post('/api2/users/uploadUserHead', param, config)
            .then((res)=>{
                var status = res.data.status;
                var This = this;
                if(status === 0){
                    messageBox({
                        title:'基本信息',
                        content:'上传头像成功',
                        ok:'确定',
                        handleOk(){
                            This.$store.commit('user/USER_NAME', {
                            name: This.$store.state.user.name , 
                            isAdmin : This.$store.state.user.isAdmin,
                            userHead: res.data.data.userHead +'?%*$%#' + Math.random()
                        });
                        }
                    });
                }else{
                     messageBox({
                        title:'基本信息',
                        content:'上传头像失败',
                        ok:'确定'
                    });
                }
            });
        }
    },
    beforeRouteEnter(from , to , next){
        axios.get('/api2/users/getUser').then((res) => {
            var status = res.data.status;
            if(status === 0){
                next( vm =>{
                    localStorage.setItem('name',res.data.data.username);
                    localStorage.setItem('isAdmin',res.data.data.isAdmin);
                    vm.$store.commit('user/USER_NAME', { 
                        name: res.data.data.username , 
                        isAdmin : res.data.data.isAdmin,
                        userHead: res.data.data.userHead
                    })
                });
            }else{
                next('/mine/login')
            }
        });
    }
}
</script>

<style scoped>
.userHead{
    width: 100px;
    height: 100px;
    border: 5px solid rgba(204, 204, 204, 0);
    border-radius: 50%;
    overflow: hidden;
}
</style>
