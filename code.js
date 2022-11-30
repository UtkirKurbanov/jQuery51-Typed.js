!(function($){
    'use strict';

    if($('.typed').length){
        var typed_string = $('.typed').data('typed-items');
        typed_string =typed_string.split(',')
        new Typed('.typed',{
            strings:typed_string,
            loop:true,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000
        });
    }
})(jQuery)