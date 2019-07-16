<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon_sousuo"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img"><img src="/images/movie_1.jpg"></div>
                    <div class="info">
                        <p><span>扫毒2</span><span>8.6</span></p>
                        <p>刘德华,古天乐</p>
                        <p>剧情,动作,犯罪</p>
                        <p>2019-07-05</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie_2.jpg"></div>
                    <div class="info">
                        <p><span>使徒行者</span><span>8.2</span></p>
                        <p>张家辉,吴镇宇</p>
                        <p>剧情,动作,犯罪</p>
                        <p>2018-06-28</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie_3.jpg"></div>
                    <div class="info">
                        <p><span>复仇者联盟3</span><span>8.9</span></p>
                        <p>小罗伯特·唐尼, 斯嘉丽·约翰逊</p>
                        <p>剧情,科幻,动作</p>
                        <p>2018-03-31</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Search'
}
</script>

<style scoped>
#content .search_body{
    flex: 1;
    overflow: auto;
}
.search_body .search_input{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;

}
.search_body .search_input_wrapper{
    padding: 0px 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    line-height: 22px;
}
.search_body .search_input_wrapper i{
    font-size: 16px;
    padding: 4px 0;
}
.search_body .search_input_wrapper input{
    border: none;
    font-size: 13px;
    color: #333;
    padding: 4px 0;
    outline: none;
}
.search_body .search_result h3{
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result li{
    border-bottom: 1px dashed #c9c9c9;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
}
.search_body .search_result .img{
    width: 60px;
    float: left;
}
.search_body .search_result .img img{
    width: 100%;
}
.movie_body .search_result .info{
   float: left;
   margin-left: 15px;
   flex: 1;
}
.search_body .search_result .info p{
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    display: flex;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){
    font-size: 18px;
    flex: 1;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){
    font-size: 16px;
    color:#fc7103;
}
</style>
