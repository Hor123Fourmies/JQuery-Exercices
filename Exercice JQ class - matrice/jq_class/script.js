$('#boutonPlein').click(function(){
    $('.rond, .carre, .losange').removeClass('vide').addClass('plein');

});

$('#boutonVide').click(function(){
    $('.rond, .carre, .losange').removeClass('plein').addClass('vide').removeClass('vide');
});

$('.rond').click(function(){
    $(this).toggleClass('plein');
});

// this.parent().children()

$('#carre1').click(function(){
//    $('.ligne1').toggleClass('plein');
    if ($(this).hasClass('plein') === true) {
        $('.ligne1').removeClass('plein')
    }
    else{
        $('.ligne1').addClass('plein')
    }
});

$('#carre2').click(function(){
//    $('.ligne2').toggleClass('plein');
    if($(this).hasClass('plein') === true){
        $('.ligne2').removeClass('plein')
    }
    else {
        $('.ligne2').addClass('plein')
    }
});

$('#carre3').click(function(){
    if($(this).hasClass('plein') === true){
        $('.ligne4').removeClass('plein')
    }
    else {
        $('.ligne4').addClass('plein')
    }
});

$('#carre4').click(function(){
    if($(this).hasClass('plein') === true){
        $('.ligne5').removeClass('plein')
    }
    else {
        $('.ligne5').addClass('plein')
    }
});

$('#losange1').click(function(){
//    $('.ligne3').toggleClass('plein');
//    $('#colonne3').children().toggleClass('plein');
//    $('#losange1').toggleClass('plein');
    if($(this).hasClass('plein') === true){
        $('.ligne3').removeClass('plein');
        $('#colonne3').children().removeClass('plein');
        $('#losange1').removeClass('plein');}
        else {
        $('.ligne3').addClass('plein');
        $('#colonne3').children().addClass('plein');
        $('#losange1').addClass('plein');
        }

});