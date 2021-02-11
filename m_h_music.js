$(function(){
    // モーダル開閉
    $('.header-login').click(function( ){
        $('#login-mordal-wrapper').fadeIn();
    });

    $('#close-mordal').click(function( ){
        $('#login-mordal-wrapper').fadeOut();
    });

    // headerのナヴィゲーション
    $('.navi-btn').click(function(){
        var id = $(this).attr('data-navi');
        var position = $(id).offset().top;
        $('html, body').animate({'scrollTop':position},1500);
    })

    $('.list-item').hover(
        function(){
            $(this).find('.message').fadeIn(1000);
        },
        function(){
            $(this).find('.message').fadeOut(1000);
    }); 
    
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
    // TOPに戻る
    $('#back-btn').click(function(){
        $('html, body').animate({'scrollTop':0},1500)
    });

    


});
