<template>
    <div class="cinema_body">
        <ul>
            <li>
                <div>
                    <span>万画影院</span>
                    <span class="q">
                        <span class="price">22.9</span>元起
                    </span>
                </div>
                <div class="address">
                    <span>宝山区蕰川公路杨鑫路</span>
                    <span>13.7KM</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
            <li>
                <div>
                    <span>万达影院</span>
                    <span class="q">
                        <span class="price">29.8</span>元起
                    </span>
                </div>
                <div class="address">
                    <span>宝山区梅林路水产西路</span>
                    <span>15.2KM</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
            <li>
                <div>
                    <span>新华永乐影城</span>
                    <span class="q">
                        <span class="price">25.9</span>元起
                    </span>
                </div>
                <div class="address">
                    <span>静安区延长路和沪太路交汇处</span>
                    <span>0.15KM</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CiList'
}
</script>

<style scoped>
#content .cinema_body{
    flex:1;
    overflow: auto;
}
.cinema_body ul{
    padding: 20px;
}
.cinema_body li{
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}
.cinema_body div{
    margin-bottom: 10px;
}
.cinema_body .q{
    font-size: 11px ;
    color: #f03d37;
}
.cinema_body .price{
    font-size: 18px;font-size: 18px;
}
.cinema_body .address{
    font-size: 13px;
    color: #666;
}
.cinema_body .address span:nth-of-type(2){
    float: right;
}
.cinema_body .card{
    display: flex;
}
.cinema_body .card div{ 
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
    margin-right: 5px;
}
.cinema_body .card div.or{ 
    color: #f90;
    border: 1px solid #f90;
}
.cinema_body .card div.bl{ 
    color: #589daf;
    border: 1px solid #589daf;
}
</style>
