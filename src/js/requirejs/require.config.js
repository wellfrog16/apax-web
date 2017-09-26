﻿require.config({
    //optimize: 'none',
    baseUrl: 'js',

    buildCSS: false,
    inlineText : true,

    config : {
        i18n : {
            locale : (function(){
                try {
                    var lang = 'en',
                        reg=new RegExp('(^| )lang=([^;]*)(;|$)'),
                        m = {'en':true, 'zh-cn': true},
                        arr = document.cookie.match(reg);
                    if(arr){lang = unescape(arr[2]);}
                    if(!m[lang]) { lang = 'en';}
                    return lang;
                }
                catch(e) {
                    // 打包环境
                }
            })()
        }
    },

    map: {
        '*': {
            'css': 'requirejs/css.min'
        }
    },

    //text: {
    //    onXhr: function (xhr, url) {
    //        xhr.setRequestHeader('X-Requested-Width', 'XMLHttpRequest');
    //        //Called after the XHR has been created and after the
    //        //xhr.open() call, but before the xhr.send() call.
    //        //Useful time to set headers.
    //        //xhr: the xhr object
    //        //url: the url that is being used with the xhr object.
    //    },
    //},
    //map: {

    //    // 不同模块加载不同版本加载
    //    'api1' : {
    //        'jquery' : '版本1'
    //    },

    //    'api2': {
    //        'jquery': '版本2'
    //    }
    //},

    paths: {
        // lib
        // ------------------------------------
        // requirejs
        'text' : 'requirejs/text',
        'i18n': 'requirejs/i18n',

        // jquery
        //'jquery': 'lib/jquery/jquery-3.1.0.min',
        'jquery': 'lib/jquery/jquery-1.12.4.min',
        'jquery.cookie': 'lib/jquery/jquery.cookie',
        'jquery.browser': 'lib/jquery/jquery.browser',
        'jquery.hammer': 'lib/jquery/jquery.hammer',
        'hammer': 'lib/jquery/hammer.min',

        'swiper': 'lib/swiper/swiper-3.4.2.jquery.min',

        'bootstrap': 'lib/bootstrap/bootstrap-3.3.7.min',

        'create': 'lib/createjs/createjs-2015.11.26.min',
        'createjs': 'lib/createjs/createjs',

        // helper
        'helper': 'lib/helper/helper',

        // app
        // ------------------------------------
        'script' : 'app/script',
        'web' : 'app/web',
        'loader' : 'app/loader'
    },

    shim: {
        'bootstrap' : ['jquery'],
        //'bootstrap' : ['css!./lib/bootstrap/bootstrap-3.3.7.min.css'],
        //'swiper': ['css!./lib/swiper/swiper-3.4.2.min.css'],
        'jquery.cookie' : ['jquery']
    },

    //shim : {
    //    'moduleName' : {
    //        deps: ['jquery'],
    //        exports : '模块的全局变量',
    //        init: function(QQ) {
    //            return QQ;
    //        }
    //    },

    //    'bootstrap': ['jquery'],

    //    'modernizr': {
    //        exports: 'Modernizr'
    //    }
    //},

    waitSeconds: 30,
    urlArgs : '_=' + new Date().getTime()
});