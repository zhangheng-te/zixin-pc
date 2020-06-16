$(function () {
    // 轮播图
    $.ajax({
        type: "get",
        async: false,
        url: "https://www.kytapp.com/api/index/getHomeBanner",
        success: function (res) {
            var data = JSON.parse(res);
            var list = data.data;
            for (var i = 0; i < list.length; i++) {
                var banner = `<li><img src="${list[i].path}" alt=""></li>`;
                $('.slides').append(banner);
            }

        }
    });
    // 直播列表
    // $.ajax({
    //     type: "post",
    //     async: false,
    //     url: "https://www.kytapp.com/api/Direct/directList",
    //     success: function (res) {
    //         var data = JSON.parse(res);
    //         console.log(data)

    //     }
    // });

})