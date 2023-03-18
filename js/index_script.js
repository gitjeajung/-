$(function(){
    $('.main_menu').hover(function(){
        $(this).find('.sub_menu').stop().slideToggle();
    });

    

    $('.click_2').click(function(e){
        e.preventDefault();
        $(this).addClass('color');
        $('.click_1').removeClass('color');
        $('.notice').css('display', 'none');
        $('.gallry').css('display', 'flex');
        $('.click_1').click(function(e){
            e.preventDefault();
            $(this).addClass('color');
            $('.click_2').removeClass('color');
            $('.gallry').css('display', 'none');
            $('.notice').css('display', 'block');
        });
    });

    $('.click_3').click(function(x){
        x.preventDefault();
        $('.popup').css('display', 'block');
        $('.click_4').click(function(x){
            x.preventDefault();
            $('.popup').css('display', 'none');
        });
    });

    setInterval(myslide, 3000);

}) //.JQurey


function myslide(){
    $('.slider .img:eq(0)').fadeOut(3000).prev().next()
    .fadeIn(3000).end().appendTo('.slider');
    
};