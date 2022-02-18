$(document).ready(function(){
    $('.slider').bxSlider();

    $('#backTop').backTop({
      'position' : 160,
      'speed' : 500,
      'color' : 'green',
  });
    
// Active link

$("nav ul li a").click(function(){
  $("nav ul li a").removeClass("active");
  $(this).addClass("active");
});

// SMOOTH Scroll FOR safari/IE/edge

$("a").on('click',function(event){
  if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html,body').animate({
          scrollTop: $(hash).offset().top
      }, 500, function(){
          window.location.hash = hash;
      })
  }
});
  });
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};
$(document).ready(function(){
  $(".stcky_menu").waypoint(function(direction){
      if (direction == "down"){
          $("nav").addClass("sticky");
      } else {
          $("nav").removeClass("sticky");
      }
  });
  $(".stcky_menu").waypoint(function(direction){
      if (direction == "down"){
          $(".top_header_area").addClass("sticky_top");
      } else {
          $(".top_header_area").removeClass("sticky_top");
      }
  });


});
/* Minified js for jQuery BackTop */
!function(o){o.fn.backTop=function(e){var n=this,i=o.extend({position:400,speed:500,color:"white"},e),t=i.position,c=i.speed,d=i.color;n.addClass("white"==d?"white":"red"==d?"red":"green"==d?"green":"black"),n.css({right:40,bottom:40,position:"fixed"}),o(document).scroll(function(){var e=o(window).scrollTop();console.log(e),e>=t?n.fadeIn(c):n.fadeOut(c)}),n.click(function(){o("html, body").animate({scrollTop:0},{duration:500})})}}(jQuery);