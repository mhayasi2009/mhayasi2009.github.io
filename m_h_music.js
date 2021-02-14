$(function(){
    // モーダル
    $('.header-login').click(function( ){
        $('#login-mordal-wrapper').fadeIn();
    });

    $('#close-mordal').click(function( ){
        $('#login-mordal-wrapper').fadeOut();
    });

    // ヘッダーのNaviボタン
    $('.navi-btn').click(function(){
        var id = $(this).attr('data-navi');
        var position = $(id).offset().top;
        $('html, body').animate({'scrollTop':position},1500);
    })

//list-item(ギャラリー)の開閉
    /*list-item(ギャラリー)のhover動作
     $('.list-item').hover(
         function(){
             $(this).find('.message').fadeIn(1000);
         },
         function(){
             $(this).find('.message').fadeOut(1000);
     }); */

    //  list-item(ギャラリー)のクリック動作
    $('.list-item').click(function() {
        var $message = $(this).find('.message');
        if($message.hasClass('message-open')) {
            $message.removeClass('message-open');
            $message.fadeOut();
        } else {
            $message.addClass('message-open');
            $message.fadeIn();
        }
    })

// F&Qの開閉　openクラスの有無で判断
    $('.faq-list-item').click(function() {
        var $faqanswer = $(this).find('.faq-answer');
        if($faqanswer.hasClass('open')) {
            $faqanswer.removeClass('open');
            $faqanswer.slideUp();
        } else {
            $faqanswer.addClass('open');
            $faqanswer.slideDown();
        }
    })
    
    $('#back-btn').click(function(){
        $('html, body').animate({'scrollTop':0},1500)
    });

    


});
