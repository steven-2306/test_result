$( document ).ready(function() {
    console.log( "ready!" );
    $(".card").click(function() {
        // $(this).parent().toggleClass('overlay')
        $(this).find('.overlay').toggle();
        $(this).find('p').toggle();
    })
});