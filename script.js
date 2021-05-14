function K1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var rys = canvas.getContext('2d');
      var kwad = new Path2D();
      kwad.rect(0 ,0, 75, 75);
      rys.stroke(kwad);
    }
  }
  function line(x,y) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      x = Math.floor(Math.random()*250+700);
      y = Math.floor(Math.random()*50+800);
      console.log(x, y);
      var rys = canvas.getContext('2d');
      var kwad = new Path2D();
      var kwad2 = new Path2D();
      kwad.rect(75 ,37.5, 0, 0);
      kwad2.rect(x ,y, 75, 75);
      kwad.lineTo(x, y+37.5);
      kwad.lineTo(x-30,y-20)
       kwad.lineTo(x,y+37.5)
       kwad.lineTo(x-30,y+20)
      rys.stroke(kwad);
      rys.stroke(kwad2);
    }
  }