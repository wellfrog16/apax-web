//
define([
    'createjs',
    'text!../template/loading.html!strip'
],
(createjs, htmlLoading) => {

    function preload(callback) {
        var loader = new createjs.LoadQueue(false);
        
        // 关键！----设置并发数  
        loader.setMaxConnections(5);
        // 关键！---一定要将其设置为 true, 否则不起作用。  
        loader.maintainScriptOrder = true;

        var source = [
            { 'src': 'main/landscape.png' },
            { 'src': 'icon/triangle-main.png' }
        ];

        loader.on('complete', onComplete);
        loader.loadManifest(source, true, 'asset/img/');

        function onComplete() {
            $('body').append(htmlLoading);

            mainload(callback);
        }

        return {
            close : () => $('.loading').hide()
        };
    }

    function mainload(callback) {
        var loader = new createjs.LoadQueue(false);
        
        // 关键！----设置并发数  
        loader.setMaxConnections(5);
        // 关键！---一定要将其设置为 true, 否则不起作用。  
        loader.maintainScriptOrder = true;

        var source = [
            { 'src': 'main/landscape.png' },
            { 'src': 'http://www.rui2.net/uploadfile/2015/1206/20151206024436681.jpg' },
            { 'src': 'http://pic2.16pic.com/00/00/60/16pic_60784_b.jpg' },
            { 'src': 'http://pic1.16pic.com/00/00/60/16pic_60783_b.jpg' },
            { 'src': 'http://pic2.16pic.com/00/00/60/16pic_60781_b.jpg' },
            { 'src': 'http://pic3.16pic.com/00/00/60/16pic_60782_b.jpg' },
            { 'src': 'http://pic1.16pic.com/00/00/60/16pic_60774_b.jpg' },
            { 'src': 'http://pic1.16pic.com/00/00/60/16pic_60786_b.jpg' },
            { 'src': 'http://pic2.16pic.com/00/00/60/16pic_60757_b.jpg' },
            { 'src': 'http://pic1.16pic.com/00/00/60/16pic_60747_b.jpg' }
        ];

        loader.on('progress', onProgress);
        loader.on('complete', onComplete);
        loader.loadManifest(source, true, 'asset/img/');

        function onComplete() {
            if (typeof callback === 'function') { callback(); }
        }

        function onProgress() {
            //console.log(loader.progress);
            $('.loading span').text((loader.progress * 100 | 0) + ' %');
            $('.loading .progress div').css('width', (loader.progress * 100 | 0) + '%');
        }
    }

    return preload;
});

















