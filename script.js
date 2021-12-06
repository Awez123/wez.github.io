$(document).ready(function(){
    $(window).scroll(function(){
        if(scrollY>20){
            $('header').css('background','rgb(0, 130, 139)')
        }else{
            $('header').css('background','transparent')
        }
    });
})