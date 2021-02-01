$(function(){

    
    $('.list-item').hover(
        function(){
            $(this).find('.message').fadeIn(1000);
        },
        function(){
            $(this).find('.message').fadeOut(1000);
        }); 



});