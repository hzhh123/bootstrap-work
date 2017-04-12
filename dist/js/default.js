$(function() {
    //导航颜色切换
    $('#navbar-toggle').unbind('click').click(function(e) {
        if ($('.navbar').hasClass('navbar-default')) {
            $('.navbar').removeClass('navbar-default').addClass('navbar-inverse');
        }
        if ($('.navbar').hasClass('navbar-inverse')) {
            $('.navbar').removeClass('navbar-inverse').addClass('navbar-default');
        }
    });

    //初始化sidebar高度
    //$('.sidebar').height($(window).height()-80);

    //侧边栏切换
    $('.sidebar .toggle').find('>i').each(function() {
        $(this).click(function() {
            var sidebar_width = $('.sidebar').width();
            // alert(sidebar_width);
            if (!$(this).hasClass('hide')) {
                $(this).addClass('hide');
                //不能判断这个节点是前一个还是后一个，所以前后都写
                $(this).prev().removeClass('hide');
                $(this).next().removeClass('hide');
                if ($(this).hasClass('fa-angle-double-left')) {
                    $('.sidebar').addClass('min-sidebar');
                    $('.sidebar').animate({ marginLeft: -180 - sidebar_width + 250 }, 'fast');
                    $('.sidebar #divider').animate({ marginLeft: 67 - sidebar_width + 250 }, 'fast');
                } else {
                    $('.sidebar').animate({ marginLeft: 0 }, 'fast');
                    $('.sidebar #divider').animate({ marginLeft: 250 }, 'fast');
                    $('.sidebar').removeClass('min-sidebar');
                }
            }
        })
    });


    //resizeable
    $('.sidebar .resizeable').draggable({
        axis: 'x',
        containment: [0, 0, 800, 0], //拖动区域
        drag: function(event, ui) {
            //拖动的距离
            var offset = ui.offset.left;
            //$('.sidebar').css({width:250+offset});
            $('.sidebar').width(250 + offset);

        }
    });

    //sidebar展开
    $('.sidebar .sidebar-header>i').on('click', function() {
        if ($('.sidebar').hasClass('min-sidebar')) {
            $('.sidebar').animate({ marginLeft: 0 }, 'fast');
            $('.sidebar #divider').animate({ marginLeft: 250 }, 'fast');
            $('.sidebar').removeClass('min-sidebar');
            $('.sidebar .toggle').find('>i').removeClass('hide');
        }
    });

    //滚动
    $(window).scroll(function() {
        if ($(window).scrollTop() + 50 <= ($(document).height() - $(window).height())) {
            $('#top').hide();
        } else {
            $('#top').show();
        }
    })
});
