function move(seq){
    // $(".nav-item").addClass("item-active");
    $(".nav-item").find("a").click(function(){
        $(".nav-item").removeClass("item-active");
        $(this).parent().addClass("item-active");
    });

    var offset = $("#section" + seq).offset();
    $('html, body').animate({scrollTop : offset.top-120}, 300);
}
function navbtn(e) {
    if(!$('.item-container').hasClass("nav-active")){
        $(".item-container").addClass("nav-active");

    }else{
        $(".item-container").removeClass("nav-active");
    }
}
// $(document).ready(function(){
//     $('.item-container').mouseover(function(){
//         $('.nav-dropWrap').css("display","block");
//     });
//     $('.item-container').mouseout(function(){
//         $('.nav-dropWrap').css("display","none");
//     });
// });
$(document).on("click",function(e){
    if(e.target.innerText != 'button') $(".item-container").removeClass("nav-active");
});