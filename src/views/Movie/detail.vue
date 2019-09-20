<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="iconfont icon-right" @click="handleToBack">返回</i>
        </Header>
        <Loading v-if="isLoading"/>
        <div v-else  id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{ 'background-image' : 'url('+detailMovie.img.replace(/w\.h/,'148.208')+')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                       <img :src="detailMovie.img | setWH('148.208')">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}} / {{detailMovie.dur}} 分钟</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
                <div class="detail_intro">
                    <p>{{detailMovie.dra}}</p>
                </div>
                <div class="detail_player swiper-container" ref="detail_player">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index">
                            <div>
                                <img :src="item | setWH('140.127')" >
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import { setTimeout } from 'timers';

export default {
    name:"Detail",
    components:{
        Header
    },
    data(){
        return{
            detailMovie:{   },
            isLoading:true
        }
    },
    props:['movieId'],
    methods:{
        handleToBack(){
            this.$router.back();
        }
    },
    mounted(){
        this.axios.get('/api/detailmovie?movieId='+this.movieId).then((res) =>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.isLoading = false;
                this.detailMovie = res.data.data.detailMovie;
                // console.log("PIC",this.detailMovie.albumImg)
                this.$nextTick(()=>{
                    new Swiper(this.$refs.detail_player,{
                        slidesPerView:'auto',
                        freeMode:true,
                        freeModeSticky:true
                    });
                });
            }
        });
    }
}
</script>

<style scoped>
#detailContrainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: white;
}
#detailContrainer .slide-enter-active{
    animation: .3s slideMove;
}
@keyframes slideMove{
    0%{ transform: translateX(100%);   }
    50%{ transform: translateX(50%);   }
    100%{ transform: translateX(0%);   }
}
#content .contentDetail{
    display: block;
    margin-bottom: 0;
}
#content .detail_list{
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.detail_list .detail_list_bg{
    height:100%;
    width: 100%;
    background: 0 40%;
    filter: blur(20px);
    background-size: cover;
    position:absolute;
    top: 0;
    left: 0;
}
.detail_list .detail_list_filter{
    height: 100%;
    width: 100%;
    background-color: #40454d;
    opacity: .55;
    position:absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.detail_list .detail_list_content{
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.detail_list .detail_list_img{
    height: 108px;
    width: 150px;
    border: 1px solid #f0f2f3;
    margin: 20px;
}
.detail_list .detail_list_img img{
    height: 100%;
    width: 100%;
}
.detail_list .detail_list_info{
    margin-top: 20px;
}
.detail_list .detail_list_info h2{
    font-size: 20;
    color: white;
    font-weight:normal;
    line-height: 40px;
}
.detail_list .detail_list_info p{
    color: white;
    line-height: 20px;
    font-size: 14px;
    color: #ccc;
}
#content .detail_intro{
    padding: 10px;
}
#content .detail_player{
   margin: 20px;
}
.detail_player .swiper-slide{
    width: 70px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px;
}
.detail_player .swiper-slide img{
   margin-bottom: 5px;
   width: 100%;
}
.detail_player .swiper-slide p:nth-of-type(2){
  color: #999;
}
</style>
