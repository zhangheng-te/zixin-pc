$(function () {
  //  窗口尺寸改变时调用一次，进行rem的重新设置
  //  - window.onresize 窗口尺寸改变时触发
  window.onresize = setRem;
  // 主页tab栏
  $("#tab li").click(function () {
    $(this)
      .addClass("tabs")
      .siblings()
      .removeClass();
    $(".content>div")
      .hide()
      .eq($("#tab li").index(this))
      .show();
  });
  // 课程tab栏
  $(".tab li").click(function () {
    $(this)
      .addClass("li")
      .siblings()
      .removeClass();
    $(".class_cont>div")
      .hide()
      .eq($(".tab li").index(this))
      .show();
  });

  //  跳转登录页
  $(".register").click(function () {
    location.href = './login.html'
  })


  // 轮播图
  $(".banner").ready(function () {
    $('.flexslider').flexslider({
      directionNav: true,
      pauseOnAction: false,
      slideshowSpeed: 3000
    });
  });

  // 直播模块鼠标移入放大效果
  $(".live ul li").mouseover(function (event) {
    $(this).addClass("big");
    $(this)
      .siblings()
      .removeClass("big");
  });
  // 首页课程轮播
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



  });


  // 课程模块分页
  $every_page = 16;

  $items = $(".ul li");
  $total_all = $items.length; //总条数
  $page_num = Math.round($total_all / $every_page); //向上取整（2.5 ==> 3）

  if ($items.length < 16) {
    $(".btn").css("display", "none");
  }
  $("#total_page").text($page_num);
  //初始化页面，只显示前16条。
  $(".ul li:gt(" + ($every_page - 1) + ")").each(function () {
    $(this).hide();
  });
  //点击下一条按钮函数。
  $("#next_page").click(function () {
    $current_page = $("#current_page").text(); //获取当前页码
    if ($current_page < $page_num) {
      $("#current_page").text(++$current_page);
      $.each($(".ul li"), function (index, item) {
        //获取下一页显示的开始索引。
        var start = ($("#current_page").text() - 1) * $every_page;
        if (index >= start && index < start + $every_page) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    } else {
      return false;
    }
  });
  $("#pre_page").click(function () {
    $current_page = $("#current_page").text();
    if ($current_page > 1) {
      $("#current_page").text(--$current_page);
      $.each($(".ul li"), function (index, item) {
        var start = ($("#current_page").text() - 1) * $every_page;
        if (index >= start && index < start + $every_page) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    } else {
      return false;
    }
  });
});