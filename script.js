$(function() {
  var nImage = 0;
  while(nImage <= 180){
      var img = '<img class="img-'+nImage+'" src="lib/img/threesixty_'+nImage+'.jpg"/>';
      $('.wrap').append(img);
      nImage +=1;
  }

  new Dragdealer('just-a-slider', {
    animationCallback: function(x, y) {
      var value = Math.round(x * 180);
      $('#just-a-slider .value').text(value);
      $('.wrap img').hide();
      $('.wrap .img-'+value+'').show();
    }
  });
});
