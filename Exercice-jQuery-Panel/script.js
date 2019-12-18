var contenuPanel = $('.panel').html();

$('div').click(function(){
    alert(contenuPanel);
});

$('div').click(function(){
    $('div').toggleClass('panel open');
});