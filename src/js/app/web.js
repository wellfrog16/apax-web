'use strict';

// 框架

define(['jquery', 'text!../template/nav.html!strip', 'i18n!./nls/message', 'jquery.cookie'], function ($, htmlnav, i18n) {

    var self = {};

    self.nav = function () {
        $('body').prepend(htmlnav);

        // var a = $('.nav .link a'), i = 0;
        // $.each(i18n.nav, function(index, item){
        //     a.eq(i++).text(item.toUpperCase());
        // });

        // // 导航动画
        // $('.nav-toggle').on('click', function(){
        //     $('.nav').animate({ 'right': '0' });
        // });

        // $('.nav .close').on('click', function(){
        //     $('.nav').animate({ 'right': '-250px' });
        // });
    };

    return self;
});