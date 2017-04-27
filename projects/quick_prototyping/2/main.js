var colors = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00',
  '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff',
  '#0080ff', '#0040ff', '#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff',
  '#ff00bf', '#ff0080', '#ff0040', '#ff0000'];
var active = 0;
setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 1000);

var date = new Date();

function updateTime() {
  date = new Date();
  $('#time-gmt').html( date.toGMTString() );
  $('#time-seconds').html( date.getTime() );
}

$(function() {
  updateTime();
  setInterval(updateTime, 50);

  $('#month').html( date.getMonth() );
  $('#day').html( date.getDate() );
  $('#year').html( date.getUTCFullYear() );
});
