~function () {
    var $header = $('.header'),
        $main = $('.main'),
        $menu = $main.children('.menu');

    //->computedMainHeight:计算MAIN区域的高度
    function computedMainHeight() {
        //outerHeight=>offsetHeight  innerHeight=>clientHeight
        var winH = $(window).outerHeight(),
            headerH = $header.outerHeight(),
            tarH = winH - headerH - 40;
        $main.css('height', tarH);
        $menu.css('height', tarH - 2);
    }

    computedMainHeight();
    $(window).on('resize', computedMainHeight);
}();