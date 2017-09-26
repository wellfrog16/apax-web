'use strict';

//
define(['jquery', 'helper', 'loader', 'web', 'text!../template/block.html!strip'], function ($, helper, loader, web, htmlBlock) {

    return function () {
        // 如果是手机端，加载横屏提示
        if (!helper.isPC) {
            $('body').append(htmlBlock);
        }

        // 加载完成
        var _loader = loader(function () {
            web.nav();

            _loader.close();
        });
    };

    //alert($);
});