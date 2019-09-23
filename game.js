b = new Bump(PIXI);	
var gameport = document.getElementById("gameport");
//let ticker = PIXI.Ticker.shared;
var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);
var stage = new PIXI.Container();
var winn = "Winner!"
var game = true
var score = 0;
var message = new PIXI.Text(score,{fill:"white"});
var winner = new PIXI.Text(winn,{fill:"white", align:'center',fontSize:40});
var hero = new PIXI.Sprite(PIXI.Texture.fromImage("hero.png"));
var mouse0 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse1 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse2 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse3 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse4 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse5 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse6 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse7 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse8 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mouse9 = new PIXI.Sprite(PIXI.Texture.fromImage("mouse.png"));
var mice = [mouse0,mouse2,mouse3,mouse4,mouse5,mouse6,mouse7,mouse8,mouse9,mouse1]
var wall = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall.position.x = 10;
wall.position.y = 0;
stage.addChild(wall);

hero.health = 100;
hero.position.x = 100;
hero.position.y = 100;
stage.addChild(hero);

mouse0.position.x = 350
mouse0.position.y = 30
stage.addChild(mouse0);

mouse1.position.x = Math.floor(Math.random() * 300) + 40;
mouse1.position.y = Math.floor(Math.random() * 300) + 40;
stage.addChild(mouse1);

mouse2.position.x = 300;
mouse2.position.y = 350;
stage.addChild(mouse2);

mouse3.position.x = Math.floor(Math.random() * 400) + 40;
mouse3.position.y = Math.floor(Math.random() * 400) + 50;
stage.addChild(mouse3);

mouse4.position.x = 350;
mouse4.position.y = 270;
stage.addChild(mouse4);

mouse5.position.x = Math.floor(Math.random() * 300) + 200;
mouse5.position.y = Math.floor(Math.random() * 300) + 40;
stage.addChild(mouse5);

mouse6.position.x = Math.floor(Math.random() * 300) + 40;
mouse6.position.y = Math.floor(Math.random() * 300) + 50;
stage.addChild(mouse6);

mouse7.position.x = 30;
mouse7.position.y = 40;
stage.addChild(mouse7);

mouse8.position.x = Math.floor(Math.random() * 300) + 40;
mouse8.position.y = Math.floor(Math.random() * 300) + 40;
stage.addChild(mouse8);

mouse9.position.x = Math.floor(Math.random() * 300) + 50;
mouse9.position.y = Math.floor(Math.random() * 300) + 50;
stage.addChild(mouse9);

var wall2 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall2.position.x = 0;
wall2.position.y = 5;
stage.addChild(wall2);

var wall3 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall3.position.x = 10;
wall3.position.y = 0;
stage.addChild(wall3);

var wall4 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall4.position.x = 0;
wall4.position.y = 390;
stage.addChild(wall4);

var wall5 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall5.position.x = 390;
wall5.position.y = 0;
stage.addChild(wall5);

var wall6 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall6.position.x = -100;
wall6.position.y = 225;
stage.addChild(wall6);

var wall7 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall7.position.x = -150;
wall7.position.y = 250;
stage.addChild(wall7);

var wall8 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall8.position.x = -250;
wall8.position.y = 300;
stage.addChild(wall8);


var wall10 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall10.position.x = -150;
wall10.position.y = 150;
stage.addChild(wall10);

var wall11 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall11.position.x = 300;
wall11.position.y = -300;
stage.addChild(wall11);
stage.addChild(wall11);

var wall12 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall12.position.x = 300;
wall12.position.y = 300;
stage.addChild(wall12);

var wall13 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall13.position.x = 100;
wall13.position.y = -300;
stage.addChild(wall13);

var wall14 = new PIXI.Sprite(PIXI.Texture.fromImage("wall2.png"))
wall14.position.x = 300;
wall14.position.y = 150;
stage.addChild(wall14);

var wall15 = new PIXI.Sprite(PIXI.Texture.fromImage("wall.png"))
wall15.position.x = 200;
wall15.position.y = 300;
stage.addChild(wall15);

stage.addChild(message);

function GameLoop()
{
	
	var yy;
	var xx;
	for(let i=0;i<mice.length;i++)
	{
		xx = Math.floor(Math.random()*2);
		yy = Math.floor(Math.random()*2);
		if (yy == 1)
		{
			mice[i].position.y+=5;
		}
		else
		{
			mice[i].position.y-=5;
		}
		if (xx == 1)
		{
			mice[i].position.x+=5;
		}
		else
		{
			mice[i].position.x-=5;
		}
			
	}
	for(let i=0;i<mice.length;i++)
	{
		b.hit(mice[i],wall, true);
		b.hit(mice[i], wall2, true);
		b.hit(mice[i], wall3, true);
		b.hit(mice[i], wall4, true);
		b.hit(mice[i], wall5, true);
	}
	requestAnimationFrame(GameLoop);
	b.hit(hero, wall, true);
	b.hit(hero, wall2, true);
	b.hit(hero, wall3, true);
	b.hit(hero, wall4, true);
	b.hit(hero, wall5, true);
	b.hit(hero, wall6, true);
	b.hit(hero, wall7, true);
	b.hit(hero, wall8, true);	
	b.hit(hero, wall10, true);
	b.hit(hero, wall11, true);
	b.hit(hero, wall12, true);
	b.hit(hero, wall13, true);
	b.hit(hero, wall14, true);
	b.hit(hero, wall15, true);
	for(let i=0;i<mice.length;i++)
	{
			
		if (b.hit(hero, mice[i]))
		{
			destroy(mice[i]);
		}
	}
}
function win()
{
	game=false;
	winner.x.position = 200;
	winner.y.position = 200;
	stage.addChild(winner);
}

function destroy(character)
{
	console.log(mice);
	var index = mice.indexOf(character);
	if (index>-1)
	{
		mice.splice(index,1);
	}
	console.log(mice);
	stage.removeChild(character);
	character.destroy();
	score++;
	message.text = score;
	console.log(score);
	if(mice.length ==0)
	{
		win();
	}
}


function keydownEventHandler(e) {

  if (e.keyCode == 87) 
  { 
    hero.position.y -= 5;
	console.log(hero.position.y);
	console.log(hero.position.x);
  }

  if (e.keyCode == 83) { 
    hero.position.y += 5;
	console.log(hero.position.y);
	console.log(hero.position.x);
  }

  if (e.keyCode == 65) { 
    hero.position.x -= 5;
	console.log(hero.position.y);
	console.log(hero.position.x);
  }

  if (e.keyCode == 68) { 
    hero.position.x += 5;
	console.log(hero.position.y);
	console.log(hero.position.x);
  }
}

function mouseHandler(e) 
{
  hero.position.x = Math.floor(Math.random() * 300) + 50;
  hero.position.y = Math.floor(Math.random() * 300) + 50;
}  
hero.interactive = true;
hero.on('mousedown', mouseHandler);

document.addEventListener('keydown', keydownEventHandler);

function animate() {
	
		
	
  requestAnimationFrame(animate);
  renderer.render(stage);	
}
GameLoop();
animate();
