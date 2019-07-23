<template>
    <div>
         <el-table
            :data="nowTableData"
            border
            style="width: 100%">
            <el-table-column
            prop="userHead"
            width="200"
            label="用户头像">
            <template slot-scope="scope">
                <img :src="scope.row.userHead" class="userHead" >
            </template>
            </el-table-column>
            <el-table-column
            prop="date"
            width="200"
            label="注册日期">
            </el-table-column>
            <el-table-column
            prop="username"
            width="200"
            label="用户姓名">
            </el-table-column>
            <el-table-column
            prop="email"
            width="200"
            label="邮箱">
            </el-table-column>
             <el-table-column
            width="180"
            label="操作">
            <template slot-scope="scope">
                <el-button size="small" @click="handleToFreeze(scope.$index, scope.row)">{{scope.row.isFreeze ? '已冻结' : '未冻结'}}</el-button>
                <el-button size="small" @click="handleToDelete(scope.$index, scope.row)" type="danger">移除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="page"
            background
            layout="prev, pager, next"
            :current-page.sync="currentPage"
            :page-size="3"
            :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'users',
    data(){
        return {
            tableData: [],
            currentPage:1,
            pageSize:3
        }
    },
    mounted(){
        this.axios.get('/api2/admin/usersList').then((res)=>{
            var status = res.data.status;
            if(status === 0){
                this.tableData = res.data.data.usersList;
            }
        });
    },
    computed: {
        nowTableData(){
            return this.tableData.slice((this.currentPage -1) * this.pageSize , this.currentPage * this.pageSize) || []
        }
    },
    methods:{
        handleToFreeze(index, row){
            this.axios.post('/api2/admin/updateFreeze',{
                email:row.email,
                isFreeze: !row.isFreeze
            }).then((res)=>{
                var status = res.data.status;
                if(status === 0){
                    this.$alert('冻结操作已成功', '信息',{
                        confirmButtonText: '确定',
                        callback: action =>{
                            this.tableData[index].isFreeze = !row.isFreeze;
                        }
                    });
                }else{
                    if(status === 0){
                    this.$alert('冻结操作失败', '信息',{
                        confirmButtonText: '确定'
                    });
                    }
                }
            })
        },
        handleToDelete(index, row){
            this.axios.post('/api2/admin/deleteUser',{
                email: row.email
            }).then((res)=>{
                var status = res.data.status;
                if(status === 0){
                    this.$alert('删除账号成功', '信息',{
                        confirmButtonText: '确定',
                        callback: action =>{
                            this.tableData.splice(index,1);
                        }
                    });
                }else{
                    if(status === 0){
                    this.$alert('删除账号失败', '信息',{
                        confirmButtonText: '确定'
                    });
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.apge{
    margin-top: 20px;
}
.userHead{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
</style>
