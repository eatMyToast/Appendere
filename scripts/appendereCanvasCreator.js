var appendereCanvas = document.createElement("canvas");
var body = document.body,
    html = document.documentElement;
var appendereSidebarOpen = "nope";
	
var appendereCanvasHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var appendereCanvasWidth = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );

var appendereSidebar = document.createElement("div");
appendereSidebar.id = "appendereSidebar";
document.getElementsByTagName("body")[0].appendChild(appendereSidebar);
document.getElementById("appendereSidebar").style.position = "absolute";
document.getElementById("appendereSidebar").style.zIndex = "1000000";
document.getElementById("appendereSidebar").style.display = "display";
document.getElementById("appendereSidebar").style.cursor = "initial";
document.getElementById("appendereSidebar").style.width = "300px";
document.getElementById("appendereSidebar").style.height = appendereCanvasHeight + "px";
document.getElementById("appendereSidebar").style.backgroundColor = "purple";
document.getElementById("appendereSidebar").style.top = "0px";
document.getElementById("appendereSidebar").style.left = "-300px";

appendereCanvas.id = "appendereCanvas";
appendereCanvas.width = appendereCanvasWidth;
appendereCanvas.height = appendereCanvasHeight;
document.getElementsByTagName("body")[0].appendChild(appendereCanvas);
document.getElementById("appendereCanvas").style.position = "absolute";
document.getElementById("appendereCanvas").style.zIndex = "999999";
document.getElementById("appendereCanvas").style.display = "none";
document.getElementById("appendereCanvas").style.cursor = "crosshair";
document.getElementById("appendereCanvas").style.top = "0px";
document.getElementById("appendereCanvas").style.left = "0px";

document.getElementById("appendereSidebar").innerHTML = ("<div id='appendereSidebarButton'></div>");
document.getElementById("appendereSidebarButton").style.position = "relative";
document.getElementById("appendereSidebarButton").style.width = "25px";
document.getElementById("appendereSidebarButton").style.height = "100%";
document.getElementById("appendereSidebarButton").style.cssFloat = "right";
document.getElementById("appendereSidebarButton").style.backgroundColor = "rebecca purple";

document.getElementById("appendereSidebar").innerHTML += ("<textarea id='appendereSidebarTextarea'></textarea>");
document.getElementById("appendereSidebarTextarea").style.width = "calc(94% - 55px)";
document.getElementById("appendereSidebarTextarea").style.height = "calc(100% - 30px)";
document.getElementById("appendereSidebarTextarea").style.resize = "none";
document.getElementById("appendereSidebarTextarea").style.position = "relative";
document.getElementById("appendereSidebarTextarea").style.padding = "15px";
document.getElementById("appendereSidebarTextarea").style.margin = "0";
document.getElementById("appendereSidebarTextarea").style.border = "0";
document.getElementById("appendereSidebarTextarea").style.cssFloat = "left";

function appendereSidebarMove(){
	if(appendereSidebarOpen === false){
		document.getElementById("appendereSidebar").style.left = "0px";
		appendereSidebarOpen = true;
	}else if(appendereSidebarOpen === true){
		document.getElementById("appendereSidebar").style.left = "-275px";
		appendereSidebarOpen = false;
	}
}

var colorBlack = "rgba(0,0,0,1)";
var colorWhite = "rgba(255,255,255,1)";
var colorRed = "rgba(255,0,0,1)";
var colorYellow = "rgba(255,255,76,0.2)";
var colorPink = "rgba(255,141,161,0.1)";
var colorGreen = "rgba(127,241,39,0.1)";
var colorErase = "rgba(255,255,255,1)";
var draw = "source-over";
var erase = "destination-out";
var strokeSize = 5;

var tool = draw;
var curColor = colorBlack;
var clickColor = new Array();
var toolSetting = new Array();
var strokeSizes = new Array();

context = document.getElementById('appendereCanvas').getContext("2d");

document.getElementById('appendereCanvas').onmousedown = function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
};

document.getElementById('appendereCanvas').onmousemove = function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
  }
};

document.getElementById('appendereCanvas').onmouseup = function(e){
  paint = false;
};

document.getElementById('appendereCanvas').onmouseleave = function(e){
  paint = false;
};

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(curColor);
	toolSetting.push(tool);
	strokeSizes.push(strokeSize);
	context.lineJoin = "round";
	for(var i=0; i < clickX.length; i++) {
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.globalCompositeOperation = toolSetting[i];
		context.lineWidth = strokeSizes[i];
		context.strokeStyle = clickColor[i];
		context.stroke();
	}

}
document.querySelector('#appendereSidebarButton').addEventListener('click', appendereSidebarMove);