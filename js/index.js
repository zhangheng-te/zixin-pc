$(function () {
    // tab栏
    $('#tab li').click(function () {
        $(this).addClass("tabs").siblings().removeClass();
        $(".content>div").hide().eq($('#tab li').index(this)).show();
    });


    // 轮播图
    $('.banner').slider({
        imgList: [{
                img: './imgs/banner1.jpg',
                a: '#',
            },
            {
                img: './imgs/banner2.jpg',
                a: '#',
            },
            {
                img: './imgs/banner3.jpg',
                a: '#',
            },
            {
                img: './imgs/banner4.jpg',
                a: '#',
            }
        ], //图片的列表
        height: 1200, //图片的高
        isAuto: true, //是否自动轮播
        moveTime: 3000, //运动时间
        direction: 'right', //轮播的方向
        btnWidth: 50, //按钮的宽
        btnHeight: 50, //按钮的高
        spanWidth: 10, //span按钮的宽
        spanHeight: 10, //span按钮的高
        spanColor: '#666', //span按钮的颜色
        activeSpanColor: '#2397ff', //选中的span颜色
        btnBackgroundColor: 'rgba(0, 0, 0, 0.3)', //两侧按钮的颜色
        spanRadius: '50%', //span按钮的圆角程度
        spanMargin: 3, //span之间的距离
    })



    // 直播模块鼠标移入放大效果
    $('.live ul li').mouseover(function (event) {
        $(this).addClass('big');
        $(this).siblings().removeClass('big');

    })

    new Swiper(".swiper-container", {

        //默认功能属性
        speed: 250,
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        loop: true,
        autoplay: true,

        //分页索引
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        //分页按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }

    });

})