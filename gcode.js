var posData = new Array();
var aData = new Array();
var bData = new Array();
var fastData = new Array();
aData.push("L");
bData.push("L");
posData.push("L");
fastData.push("L");
var mx = my = mz = 0;


$.get("sample.txt", function(d) {
  var data = d.split(/\n/);
  var cc = "";
  var x = y = z = tx = ty = tz = 0;
  var push = false;
  for(var i = 0; i <= data.length-1; i+=1){
    push = true;
    if(data[i].search(/\x3B\TYPE/) != -1){
      cc = data[i];
    }

    tx = data[i].match(/X\x2D?\d+\x2E\d+/);
    ty = data[i].match(/Y\x2D?\d+\x2E\d+/);
    tz = data[i].match(/Z\x2D?\d+\x2E\d+/);
    if(tx != null){
      x = parseFloat(tx[0].substr(1));
      if(x > mx){
        mx = x;
      }
    }
    if(ty != null){
      y = parseFloat(ty[0].substr(1));
      if(y > my){
        my = y;
      }
    }
    if(tz != null){
      z = parseFloat(tz[0].substr(1));
      if(z > mz){
        mz = z;
      }
    }

    if(push){
      if(data[i].search("G0") != -1){
        posData.push("M");
      }else if(data[i].search("G1") != -1){
        posData.push("L");
      }

      posData.push(x);
      posData.push(z);
      posData.push(y);
    }

    if(push && (i%10 == 0) || data[i].search("G0") != -1){
      if(data[i].search("G0") != -1){
        fastData.push("M");
      }else if(data[i].search("G1") != -1){
        fastData.push("L");
      }

      fastData.push(x);
      fastData.push(z);
      fastData.push(y);
    }

    if(push || data[i].search("G0") != -1){
      if(i%2 == 0){
        if(data[i].search("G0") != -1){
          aData.push("M");
        }else if(data[i].search("G1") != -1){
          aData.push("L");
        }

        aData.push(x);
        aData.push(z);
        aData.push(y);
      }else{
        if(data[i].search("G0") != -1){
          bData.push("M");
        }else if(data[i].search("G1") != -1){
          bData.push("L");
        }

        bData.push(x);
        bData.push(z);
        bData.push(y);
      }
    }

  }

  //var canvas = document.getElementById("canvasID");
  //var ctx = canvas.getContext("2d");
  //ctx.globalCompositeOperation = "lighter";
  //ctx.shadowBlur=20;
  //ctx.shadowColor="black";
  $('#startVis').click(function(){
    drawDemo("canvasID");
  });
  //console.log(posData[2]);
});

function drawDemo(cvsID){
  var g, gcode, grp, fcode, frp, acode, bcode, abgrp;
  g = new Cango3D(cvsID);  // create a graphics context
  //g.ctx.globalCompositeOperation = "";
  //g.ctx.shadowBlur = 20;
  //g.ctx.shadowColor = "black"
  gcode = g.compilePath3D(posData, "rgb(255,0,0)", .15);
  gcode.translate(0, -75, 5);
  fcode = g.compilePath3D(fastData, "rgb(255,0,0)", .15);
  fcode.translate(0, -75, 5);

  //acode = g.compilePath3D(aData, "red", 1);
  //acode.translate(0, -75, 5);
  //bcode = g.compilePath3D(bData, "green", 1);
  //bcode.translate(0, -75, 5);

  g.setPropertyDefault("backgroundColor", "aliceblue");
  g.setWorldCoords3D(-75, -120, 150);
  //g.setLightSource(0, 100, 200);
  grp = g.createGroup3D(gcode);
  //abgrp = g.createGroup3D(acode, bcode);
  frp = g.createGroup3D(fcode);
  //g.renderFrame(abgrp);
  mX = mouseX;
  mY = mouseY
  var run = setInterval(rotate, 100);

  function rotate(){
    if($('#canvasID').is(':visible')){
      if(mouseDown){
        grp.transform.rotate(0,1,0,-(mX-mouseX));
        frp.transform.rotate(0,1,0,-(mX-mouseX));
        //grp.transform.rotate(0,0,1,(mY-mouseY));
        //frp.transform.rotate(0,0,1,(mY-mouseY));
        g.renderFrame(frp);
        alreadyRendered = false;
      }else if(!alreadyRendered){
        g.renderFrame(grp);
        //alreadyRendered = true;
      }
      mX = mouseX;
    }
  }
}

var alreadyRendered = false;

var mouseX = mouseY = 0;
var mX = mY = 0;
var mouseDown = false;
$('#canvasID').mousemove(function(e){
  mouseX = e.screenX;
  mouseY = e.screenY;
});
$('#canvasID').mousedown(function(e){
  mouseDown = true;
});
$('#canvasID').mouseup(function(e){
  mouseDown = false;
});
