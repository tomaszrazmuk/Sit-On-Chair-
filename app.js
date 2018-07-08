$(function(){

    $.scrollTo(0);
    $('#link1').click(function(){ $.scrollTo($('#start'),500); });
    $('#link2').click(function(){$.scrollTo($('#projekty'),500);});
    $('#link3').click(function(){ $.scrollTo($('#profil'),500); });
    $('#link4').click(function(){ $.scrollTo($('#stopka'),500); });
    $('.scrollup').click(function(){ $.scrollTo($('body'),5000); });
    $( window ).scroll(function() {


    });

    var zakladka = $("nav ul li a").attr("href");


    $("nav ul li a").click(function(){
        $(this).attr("href");

        $("nav ul li").removeClass("active");
        $(this).parent().addClass("active");
    });
//okno przeglądarki na 600px;
//var resizeboxes  = function() {

    if ($("nav").width() < 900 || $("nav"). width() < 1000){
        $("nav").addClass("fa fa-bars fa-3x");
        $( "nav ul" ).addClass("mininav");
        $("nav").click(function(){
            $("nav ul li").parent().toggleClass("hamburgerbar");
            $("nav ul li").addClass("hamburgerbarli");
        });

    } else{
        $( "nav" ).removeClass( "mininav" );
    }

//};

//resizeboxes();

//$(window).resize(function(){
//resizeboxes();
//});


});

//pokaż scrollUp
$(window).scroll(function()
{
    if($(this).scrollTop()>40){
        $('nav').addClass('sticky');
    }
    if($(this).scrollTop()>20){
        $('.scrollup').fadeIn();

        $('aside').addClass(' border');
        $('aside section p').addClass(' border animated fadeInDownBig').fadeIn();

        $('article').addClass(' border');
        $('footer').addClass('border');

    }else{
        $('.scrollup').fadeOut();
        $('nav').removeClass('sticky');
        $('aside').removeClass('border');
        $('aside section p').removeClass(' border animated bounceInLeft').fadeOut();
        $('article').removeClass('border');
        $('footer').removeClass('border');
    }

});
