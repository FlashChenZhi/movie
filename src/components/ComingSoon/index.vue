<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="/images/movie_1.jpg" ></div>
                <div class="info_list">
                    <h2>扫赌2</h2>
                    <p>观众评分：8.6<span></span></p>
                    <p>主演：导演：编剧：出品人：</p>
                    <p>黑白两道,兄弟反目,天地对决！</p>
                </div>
                <div class="btn_mall">
                    立即购票
                </div>
            </li>
            <li>
                 <div class="pic_show"><img src="/images/movie_2.jpg"></div>
                <div class="info_list">
                    <h2>使徒行者</h2>
                    <p>观众评分：8.2<span></span></p>
                    <p>主演：导演：编剧：出品人：</p>
                    <p>一场生与死,明与暗的较量...</p>
                </div>
                <div class="btn_mall">
                    立即购票
                </div>
            </li>
            <li>
                 <div class="pic_show"><img src="/images/movie_3.jpg" ></div>
                <div class="info_list">
                    <h2>复仇者联盟3</h2>
                    <p>观众评分：8.9<span></span></p>
                    <p>主演：导演：编剧：出品人：</p>
                    <p>一群非人类打打杀杀的游戏？！</p>
                </div>
                <div class="btn_mall">
                    立即购票
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ComingSoon'
}
</script>

<style scoped>
#content .movie_body{
    flex: 1;
    overflow: auto;
}
.movie_body ul{
    margin: 0 12px;
    overflow: hidden;
}
.movie_body ul li{
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 10px;
}
.movie_body .pic_show{
    width: 64px;
    height: 90px;
}
.movie_body .pic_show img{
    width: 100%;
}
.movie_body .info_list{
    margin-left: 10px;
    flex: 1;
    position: relative;
}
.movie_body .info_list h2{
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .info_list p{
    font-size: 13;
    color: #e666;
    line-height: 22px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .info_list .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.movie_body .info_list img{
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
}
.movie_body .btn_mall, .movie_body .btn_pre{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color:#f03d37 ;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}
.movie_body .btn_pre{
    background-color: #3c9fe6;
}
</style>
