<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>深圳</li>
                    <li>武汉</li>
                    <li>成都</li>
                    <li>长沙</li>
                    <li>杭州</li>
                    <li>西安</li>
                    <li>郑州</li>
                </ul>
            </div>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                        <ul>
                            <li>Stugat</li>
                            <li>Bayern</li>
                            <li>Berlin</li>
                        </ul>
                </div>
                <div>
                    <h2>B</h2>
                        <ul>
                            <li>City1</li>
                            <li>City3</li>
                            <li>City3</li>
                        </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'City'
}
</script>

<style scoped>
#content .city_body{
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}
.city_body .city_list{
    float: 1;
    overflow: auto;
    background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar{
    background: transparent;
    width: 0;
}
.city_body .city_hot{
    margin-top: 20px;
}
.city_body .city_hot h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: normal;
}
.city_body .city_hot ul li{
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 3%;
    padding: 0.4px;
    border: 1px solid #e6e6e6;
}
.city_body .city_sort div{
    margin-top: 20px;
}
.city_body .city_sort h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: normal;
}
.city_body .city_sort ul{
    padding-left: 10px;
    margin-top: 10px;
}
.city_body .city_sort ul li{
    line-height: 30px;
    line-height: 30px;
}
.city_body .city_index{
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #e6e6e6;
}
</style>
