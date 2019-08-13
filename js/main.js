function reloadFunc (){
  location.reload();
}
let menuBackColor = false;

$(function() {

  // スクロールしたら発動
  $(window).scroll(function() {
    if(menuBackColor === false){
      // スクロール量を変数に格納
      let sc = $(this).scrollTop();
      if(sc < 48){
        $('.headerTitleDiv').css('background', 'rgba(255, 255, 255,d' + 1/48*sc + ')');
        $('.menuList').css('color', 'rgb('+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ')');
        $('.headerTitleText').css('color', 'rgb('+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ')');
        $('.headerTitleDiv').css('border-bottom', '0.6px solid rgba('+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ', '+ (255 - (255/48*sc)) + ', 0.5)');
      }else{
        $('.headerTitleDiv').css('background', 'white');
        $('.menuList').css('color', 'black');
        $('.headerTitleText').css('color', 'black');
        menuBackColor = true;
      }
    }

  });
});

function mouseOnProject(num){
  document.getElementById('subDisplay' + num).style.display = 'none';
  document.getElementById('mainDisplay' + num).style.display = 'inline';
}
function mouseOutProject(num){
  document.getElementById('subDisplay' + num).style.display = 'inline';
  document.getElementById('mainDisplay' + num).style.display = 'none';
}
