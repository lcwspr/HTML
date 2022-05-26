/**
 * carousel函数，用来制作传统轮播
 *
 * @param carouselID: 最大盒子的ID
 * @param autoTime: 自动轮播的间隔时间
 * @param width: 宽度
 * @param animatetime: 动画运动的时间
 */

function carousel(carouselID, autoTime, width, animatetime){

    var $carousel = $("#"+carouselID);
    var $m_unit =$carousel.find(".m_unit");
    var $imageLis = $carousel.find(".m_unit li");
    var $circlesLis = $carousel.find(".circles ol li");

    var $rightBtn = $carousel.find(".rightBtn");
    var $leftBtn = $carousel.find(".leftBtn");

    var length = $imageLis.size();


    //克隆第一个li，并且追加到ul里面
    $circlesLis.find(".m_unit ul").append($imageLis.eq(0).clone());

    //信号量
    var idx = 0;

    // 定时器
    var timer = setInterval(rightBtnHundle, autoTime);

    // 鼠标进入定时器停止
    $carousel.mouseenter(function () {
        clearInterval(timer);
    });
    // 离开定时器设置监听
    $carousel.mouseleave(function () {
        timer = setInterval(rightBtnHundle, autoTime);
    });


    //右按钮监听   先运动，然后在跳
    $rightBtn.click(rightBtnHundle);

    function rightBtnHundle(){
        // 函数截流
        if($m_unit.is(":animated"))
            return ;
        idx++;
        $m_unit.animate({"left" : -width * idx},animatetime,function(){
            if(idx > length - 1){
                idx = 0;
                $(this).css("left",0);
            }
        });
        changeCirclesWithMutex();
    }

    //左按钮监听
    $leftBtn.click(function(){
        if($m_unit.is(":animated"))
            return ;
        idx--;
        if(idx < 0){
            idx = length - 1;
            $(".m_unit").css("left", length * -width);
        }
        $m_unit.animate({"left" : -width * idx},animatetime);
        changeCirclesWithMutex();

    });

    // 小圆点事件监听
    $circlesLis.click(function () {
        if($m_unit.is(":animated"))
            return ;
        idx = $(this).index();
        $m_unit.animate({"left": -width * idx}, animatetime);
        changeCirclesWithMutex();
    });


    // 根据信号量改变小圆点
    function changeCirclesWithMutex(){
        $circlesLis.eq(idx>(length - 1) ?0:idx).addClass('cur').siblings().removeClass('cur');
    }

}