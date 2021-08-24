var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var conner= createSprite(20,25,17,17);
conner.shapeColor = "brown";

var wall1= createSprite(50,0,15,200);
wall1.shapeColor = "aqua";
var wall2= createSprite(80,100,100,15);
wall2.shapeColor = "aqua";
var wall3= createSprite(40,150,100,15);
wall3.shapeColor = "aqua";
var wall4= createSprite(90,190,15,100);
wall4.shapeColor = "aqua";
var wall5= createSprite(200,7,15,200);
wall5.shapeColor = "aqua";
var wall6= createSprite(120,7,15,200);
wall6.shapeColor = "aqua";
var wall7= createSprite(147,200,100,15);
wall7.shapeColor = "aqua";
var wall8= createSprite(160,113,15,160);
wall8.shapeColor = "aqua";
var wall9= createSprite(200,200,15,120);
wall9.shapeColor = "aqua";
var wall10= createSprite(240,200,100,15);
wall10.shapeColor = "aqua";
var wall11= createSprite(270,130,15,150);
wall11.shapeColor = "aqua";
var wall12= createSprite(322,120,90,15);
wall12.shapeColor = "aqua";
var wall13= createSprite(320,77,15,100);
wall13.shapeColor = "aqua";
var wall14= createSprite(235,300,375,15);
wall14.shapeColor = "aqua";
var wall15= createSprite(355,230,15,140);
wall15.shapeColor = "aqua";
var wall16= createSprite(200,265,110,15);
wall16.shapeColor = "aqua";
var wall17= createSprite(40,260,15,150);
wall17.shapeColor = "aqua";
var wall18= createSprite(100,370,345,15);
wall18.shapeColor = "aqua";
var wall19= createSprite(80,350,15,35);
wall19.shapeColor = "aqua";
var wall20= createSprite(190,350,15,35);
wall20.shapeColor = "aqua";
var wall21= createSprite(135,310,15,35);
wall21.shapeColor = "aqua";
var wall22= createSprite(267,385,15,43);
wall22.shapeColor = "aqua";
var wall23= createSprite(245,310,15,35);
wall23.shapeColor = "aqua";
var wall24= createSprite(290,267,15,55);
wall24.shapeColor = "aqua";
var wall25= createSprite(310,400,15,125);
wall25.shapeColor = "aqua";
var wall26= createSprite(270,-85,15,200);
wall26.shapeColor = "aqua";
var bell= createSprite(395,380,10,50);
bell.shapeColor = "gold";

function draw (){
  background("green");

if (keyDown("down")){
  conner.y=conner.y+10;
}

if (keyDown("up")){
  conner.y=conner.y-10;
}

if (keyDown("right")){
  conner.x=conner.x+10;
}

if (keyDown("left")){
  conner.x=conner.x-10;
}

createEdgeSprites();
conner.bounceOff(edges);
conner.bounceOff(wall1);
conner.bounceOff(wall2);
conner.bounceOff(wall3);
conner.bounceOff(wall4);
conner.bounceOff(wall5);
conner.bounceOff(wall6);
conner.bounceOff(wall7);
conner.bounceOff(wall8);
conner.bounceOff(wall9);
conner.bounceOff(wall10);
conner.bounceOff(wall11);
conner.bounceOff(wall12);
conner.bounceOff(wall13);
conner.bounceOff(wall14);
conner.bounceOff(wall15);
conner.bounceOff(wall16);
conner.bounceOff(wall17);
conner.bounceOff(wall18);
conner.bounceOff(wall19);
conner.bounceOff(wall20);
conner.bounceOff(wall21);
conner.bounceOff(wall23);
conner.bounceOff(wall24);
conner.bounceOff(wall25);
conner.bounceOff(wall26);

if (conner.collide(bell)){
 background("white");
}
 drawSprites();

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
