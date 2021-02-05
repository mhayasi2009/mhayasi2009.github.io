$(function(){

    
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


});
